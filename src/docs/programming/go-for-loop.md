---
title: "For Loop"
date: "2025-12-25"
author: "Noyon Rahman"
parent: "golang"
category: "programming"
tags: ["programming", "go-lang", "go-for-loop"]
order: 5
---

```go
package main

import "fmt"

// for ->  only construct in go for looping
func main() {
	// while loop implementation using for loop
	// i := 1
	// for i <= 10 {
	// 	fmt.Println(i)
	// 	i = i + 1
	// }

	// infinite loop
	// for {
	// 	fmt.Println("infinite loop")
	// }

	// classic for loop
	// for i := 0; i <= 3; i++ {
	// 	if i == 2 {
	// 		continue
	// 	}
	// 	fmt.Println("value of i:", i)
	// }

	// range (in golang 1.22 version)
	for i := range 10 {
		fmt.Println("value of i using range:", i)
	}
}
```
