---
title: "Variables"
date: "2025-12-25"
author: "Noyon Rahman"
parent: "golang"
category: "programming"
tags: ["programming", "go-lang", "go-variables"]
order: 3
---

```go
package main

import "fmt"

func main() {
	var name string = "golang"
	fmt.Println("Hello,", name)

	// infer type
	var name2 = "go"
	fmt.Println("Hello,", name2)

	var isAdult = true
	fmt.Println("Is adult:", isAdult)

	var age = 33
	fmt.Println("Age:", age)
	var height = 1.75
	fmt.Println("Height:", height)

	// shorthand syntax
	country := "Bangladesh"
	fmt.Println("Country:", country)

	score := 95.5
	fmt.Println("Score:", score)

	marks := 100
	fmt.Println("Marks:", marks)
}
```
