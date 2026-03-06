'use client'

import { AssistantRuntimeProvider, useLocalRuntime, type ChatModelAdapter, type ChatModelRunResult } from '@assistant-ui/react'
import type { ReactNode } from 'react'

function toApiMessage(message: { role: string; content: unknown }) {
  const content = message.content
  return {
    role: message.role,
    content: typeof content === 'string' ? content : Array.isArray(content) ? content.map((part: { text?: string }) => part.text ?? '').join('\n') : '',
  }
}

const PayHomeModelAdapter: ChatModelAdapter = {
  async *run({ messages, abortSignal }) {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.map(toApiMessage),
      }),
      signal: abortSignal,
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.error ?? `Chat request failed (${res.status})`)
    }

    const reader = res.body?.getReader()
    if (!reader) throw new Error('No response body')

    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''
      for (const line of lines) {
        const trimmed = line.trim()
        if (!trimmed) continue
        try {
          const payload = JSON.parse(trimmed) as { content: ChatModelRunResult['content'] }
          if (payload.content) {
            yield { content: payload.content } as ChatModelRunResult
          }
        } catch {
          // skip malformed lines
        }
      }
    }
    if (buffer.trim()) {
      try {
        const payload = JSON.parse(buffer.trim()) as { content: ChatModelRunResult['content'] }
        if (payload.content) yield { content: payload.content } as ChatModelRunResult
      } catch {
        // skip
      }
    }
  },
}

export function PayhomeRuntimeProvider({ children }: Readonly<{ children: ReactNode }>) {
  const runtime = useLocalRuntime(PayHomeModelAdapter)

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  )
}
