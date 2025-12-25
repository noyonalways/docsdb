---
title: "Switch"
date: "2025-12-25"
author: "Noyon Rahman"
parent: "golang"
category: "programming"
tags: ["programming", "go-lang", "go-switch"]
order: 7
---

```go
package main

import (
	"fmt"
)

func main() {
	// simple switch
	// i := 5
	// switch i {
	// case 1:
	// 	fmt.Println("One")
	// case 2:
	// 	fmt.Println("Two")
	// case 3:
	// 	fmt.Println("Three")
	// case 5:
	// 	fmt.Println("Five")
	// default:
	// 	fmt.Println("Other number")
	// }

	// multiple condition switch
	// switch time.Now().Weekday() {
	// case time.Saturday, time.Sunday:
	// 	fmt.Println("It's a weekend!")
	// default:
	// 	fmt.Println("It's a workday.")
	// }

	// type switch
	whoAmI := func(i interface{}) {
		switch t := i.(type) {
		case int:
			fmt.Printf("I'm an integer: %d\n", t)
		case string:
			fmt.Printf("I'm a string: %s\n", t)
		case bool:
			fmt.Printf("I'm a boolean: %t\n", t)
		case float64:
			fmt.Printf("I'm a float64: %f\n", t)
		default:
			fmt.Printf("Unknown type\n")
		}
	}

	whoAmI(42)
	whoAmI("hello")
	whoAmI(true)
	whoAmI(3.14)
}
```
