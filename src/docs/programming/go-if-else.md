---
title: "If Else"
date: "2025-12-25"
author: "Noyon Rahman"
parent: "golang"
category: "programming"
tags: ["programming", "go-lang", "go-if-else"]
order: 6
---

```go
package main

import "fmt"

func main() {
	// age := 16

	// if age >= 18 {
	// 	fmt.Println("Person is an adult.")
	// } else {
	// 	fmt.Println("Person is not an adult.")
	// }

	// if age >= 18 {
	// 	fmt.Println("Person is an adult.")
	// } else if age >= 12 {
	// 	fmt.Println("Person is a teenager.")
	// } else {
	// 	fmt.Println("Person is a child.")
	// }

	var role = "admin"
	var hasPermission = true

	// Logical OR operator
	if role == "admin" || hasPermission {
		fmt.Println("Access granted.")
	}

	// Logical AND operator
	if role == "admin" && hasPermission {
		fmt.Println("Access granted with full permissions.")
	}

	// we can declare a variable inside a if construct
	if score := 85; score >= 80 {
		fmt.Println("Grade: A")
	} else if score >= 70 {
		fmt.Println("Grade: B")
	} else {
		fmt.Println("Grade: C or below")
	}

	// go does not have ternary, we will have to use normal if else
}
```
