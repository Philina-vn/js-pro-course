//array queue
function Queue() {
	const queue = [];

    function add(value) {
        queue.push(value)
    }
  
    function peek() {
        return queue[0]
    }
  
    function remove() {
        queue.shift()
    }
  
    function isEmpty() {
        return queue.length == 0
    }
	
	return {
        add,
        peek,
        remove,
        isEmpty,
    }
}

//array Stack
function Stack() {
	const stack = [];

    function add(value) {
        stack.push(value)
    }
  
    function peek() {
        return stack[stack.length-1]
    }
  
    function remove() {
        stack.pop()
    }
  
    function isEmpty() {
        return stack.length == 0
    }
	
	return {
        add,
        peek,
        remove,
        isEmpty,
    }
}

const stack = new Stack 