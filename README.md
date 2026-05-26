<a href="https://gitemoji.com">
    <img src="https://user-images.githubusercontent.com/61420084/228265936-a62bd1ac-be51-4bc3-b7e1-f640d687a3ec.gif" alt="gitemoji">
</a>

## About

[GitEmoji](https://gitemoji.com) is a guide to standardize and explain how to use **emojis on GitHub commit messages**.

**Using emojis** on **commit messages** provides an **easy way** of **identifying the purpose or intention of a commit** with only looking at the emojis used. As there are a lot of different emojis but also a lot of emojis guides, we found the need of creating a guide in our way that can help to use emojis easier.

## Example of usage

In case you want integrate emojis in your project, here's an example of a practical way to use it :

```
<message> :shortcode:
```

- `message:` Brief commit message explaining your changes.
- `shortcode:` String that will add the emoji chosen next to your message.

## For AI agents (MCP)

GitEmoji is also an **MCP server** your coding agent can query. Plug it into
Claude Code, Codex, or any MCP client, and your agent prefixes each commit with
the right emoji on its own.

Add it to your `.mcp.json`:

```json
{
  "mcpServers": {
    "gitemoji": {
      "command": "npx",
      "args": ["-y", "gitemoji-mcp"]
    }
  }
}
```

Then just ask your agent to commit as usual — it looks up the change and picks
the matching emoji.

## Contributing to GitEmoji

To add a feature or a new emoji to the list create an issue and send a pull request.
