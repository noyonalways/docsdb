---
title: "Maps"
date: "2025-12-25"
author: "Noyon Rahman"
parent: "golang"
category: "programming"
tags: ["programming", "go-lang", "go-maps"]
order: 10
---

```go
package main

import (
	"fmt"
	"maps"
)

// maps -> hash, object, dictionary
func main() {
	// creating map
	m := make(map[string]string)

	// setting and element
	m["name"] = "golang"
	m["area"] = "backend"

	// get an element
	// Important: if key does not exists in the map then it return the zero value (int -> 0, sting -> "", bool -> false)

	fmt.Println(m["name"])

	m2 := make(map[string]int)
	m2["age"] = 10
	m2["price"] = 100
	fmt.Println(m2["phone"])

	// len of map
	fmt.Println("length of m2:", len(m2))

	// delete an element from map
	delete(m2, "age")
	fmt.Println("length of m2 after delete:", len(m2))

	// delete all elements from map
	clear(m2)
	fmt.Println("length of m2 after clear:", len(m2))

	// creating map using map literal
	m3 := map[string]string{
		"brand": "ford",
		"model": "mustang",
	}
	fmt.Println(m3)

	// if else check in map
	v, ok := m3["brand"]
	fmt.Println(v)
	if ok {
		fmt.Println("brand key is present in m3")
	} else {
		fmt.Println("brand key is not present in m3")
	}

	// check to map
	m4 := map[string]int{"price": 100, "phones": 10}
	m5 := map[string]int{"price": 100, "phones": 10}
	fmt.Println(maps.Equal(m4, m5))
}
```
