---
title: "Slices"
date: "2025-12-25"
author: "Noyon Rahman"
parent: "golang"
category: "programming"
tags: ["programming", "go-lang", "go-slices"]
order: 9
---

```go
package main

import (
	"fmt"
	"slices"
)

/*
---- slices ----
- most used construct in Go
- useful methods
*/
func main() {
	// uninitialized slice in nill = null(in other languages)
	var nums []int
	fmt.Println(nums == nil) // true

	fmt.Println(len(nums)) // 0

	// initialize slice with make
	var numbs = make([]int, 2, 5)
	// print capacity -> maximum numbers of elements can fit
	fmt.Println("max capacity", cap(numbs))
	fmt.Println("numbers", numbs)
	numbs = append(numbs, 1)
	numbs = append(numbs, 2)
	numbs = append(numbs, 3)
	numbs = append(numbs, 4)
	fmt.Println("updated number", numbs)
	fmt.Println("updated max capacity", cap(numbs))

	// other way to make a slice
	strs := []string{}
	strs = append(strs, "hello")
	strs = append(strs, "world")
	fmt.Println("strings", strs)
	fmt.Println(cap(strs))
	fmt.Println(len(strs))

	// copy function to copy one slice to another
	var numbs2 = make([]int, len(numbs))
	copy(numbs2, numbs)
	fmt.Println("numbs2", numbs2)

	// slice operator
	var numbers = []int{10, 20, 30, 40, 50}
	fmt.Println("numbers", numbers[0:2])
	fmt.Println("numbers", numbers[:])  // all elements
	fmt.Println("numbers", numbers[2:]) // from index 2 to end
	fmt.Println("numbers", numbers[:3]) // from start to index 3 (excluding 3)

	// inbuilt methods slice
	var num1 = []int{1, 2, 3}
	var num2 = []int{4, 5, 6}
	fmt.Println(slices.Equal(num1, num2)) // false

	// 2d slice
	var num3 = [][]int{{1, 2, 3}, {4, 5, 6}}
	fmt.Println("2d slice", num3)

}
```
