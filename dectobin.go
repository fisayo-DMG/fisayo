package main

import (
	"fmt"
	"strconv"
)

func main() {
	var input int64
	fmt.Println("Please enter an integer")
	fmt.Scan(&input)
	fmt.Println(strconv.FormatInt(input, 2))
}
