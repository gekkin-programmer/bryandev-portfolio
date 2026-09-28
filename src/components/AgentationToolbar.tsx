import { Agentation } from 'agentation';

/**
 * Dev-only annotation toolbar.
 * Rendered via `client:only="react"` in BaseLayout, returns null in prod builds
 * so zero Agentation JS ships to production (fast load preserved).
 */
export default function AgentationToolbar() {
  if (import.meta.env.PROD) return null;
  return <Agentation />;
}
