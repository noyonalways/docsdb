---
title: "Arrays"
date: "2025-12-25"
author: "Noyon Rahman"
parent: "golang"
category: "programming"
tags: ["programming", "go-lang", "go-arrays"]
order: 8
---

```go
package main

import "fmt"

func main() {
	var numbs [5]int

	numbs[0] = 10
	numbs[1] = 20
	numbs[2] = 30
	numbs[3] = 40
	numbs[4] = 50

	// print array
	fmt.Println(numbs)

	// print a value by index
	fmt.Println(numbs[2])

	// array length
	fmt.Println(len(numbs))

	// zeroed values
	// int -> 0, sting -> "", bool -> false
	var vals [4]bool
	fmt.Println(vals)

	var str [10]string
	fmt.Println(str)

	// to declare in single line
	fruits := [3]string{"apple", "banana", "cherry"}
	fmt.Println(fruits)

	// 2d arrays
	matrix := [2][2]int{
		{1, 2},
		{4, 5},
	}
	fmt.Println(matrix)

	// - fixed size, that is predictable
	// - memory optimization
	// - contant time access
}
```
