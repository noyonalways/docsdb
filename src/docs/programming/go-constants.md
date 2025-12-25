---
title: "Constants"
date: "2025-12-25"
author: "Noyon Rahman"
parent: "golang"
category: "programming"
tags: ["programming", "go-lang", "go-constants"]
order: 4
---

```go
package main

func main() {
	const name string = "golang"
	println("Hello, " + name)

	// group constants
	const (
		port = 5000
		host = "localhost"
	)

	println("Server running at", host, "on port", port)
}
```
