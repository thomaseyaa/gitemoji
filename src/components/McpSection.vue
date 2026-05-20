<template>
  <section id="mcp" class="mcp-section">
    <div class="mcp-grid">
      <div>
        <span class="mcp-tag">For AI agents</span>
        <h2>Your agent commits with the right emoji</h2>
        <p>GitEmoji is also an MCP server your agent can query.</p>
        <div class="mcp-chips">
          <span class="mcp-chip">Claude Code</span>
          <span class="mcp-chip">Codex</span>
          <span class="mcp-chip mcp-chip--more">+ any MCP client</span>
        </div>
        <ol class="mcp-steps">
          <li>
            <span class="n">1</span>
            <span>Add the config to <b>.mcp.json</b></span>
          </li>
          <li>
            <span class="n">2</span>
            <span><b>Commit</b> as usual</span>
          </li>
          <li>
            <span class="n">3</span>
            <span>It picks the <b>right emoji</b></span>
          </li>
        </ol>
      </div>

      <div class="mcp-code">
        <div class="mcp-code__head">
          <span class="mcp-code__file">.mcp.json</span>
          <button class="mcp-code__copy" type="button" @click="copyConfig">
            {{ copied ? "Copied!" : "Copy" }}
          </button>
        </div>
        <pre>{{ config }}</pre>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "McpSection",
  data() {
    return {
      copied: false,
      config: `{
  "mcpServers": {
    "gitemoji": {
      "command": "npx",
      "args": ["-y", "gitemoji-mcp"]
    }
  }
}`,
    };
  },
  methods: {
    copyConfig() {
      navigator.clipboard.writeText(this.config);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1600);
    },
  },
};
</script>
