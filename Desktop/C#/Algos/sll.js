class Node {
    constructer(){
        this.data
        this.next = null;
    }
} 

class SLL {
    constructor(){
        this.head = null;
    }

    isEmpty(){
        if(this.head == null){
            return true;

        } else {
            return false;
        }
        // More efficient way of writing the question
        // Return this.head == null;
    }
    print (){
        // Print out all values in our sll
        var arr = [];
        var runner = this.head;
        // We need to use .push 
        while (runner){
            arr.push(runner.data);
            runner = runner.next;
        }
        // arr.push(runner.data);
        console.log(arr);
    }


    insertAtBack(val){
        var runner = this.head;
        while(runner){
            runner = runner.next;
        }
    }


}

var sll = new SLL();
var node1 = new Node (5);
var node2 = new Node (7);
var node3 = new Node (9);
var node4 = new Node (1);
console.log(sll.isEmpty());
sll.head = node1;
console.log(sll.isEmpty());
// Remember the head is the pointer 
// The pointer is pointing at a node
// That node has data and a next value
// So when we represent the node as head we are able to greab its attributes
sll.head.next = node2;
sll.head.next.next = node3;
sll.head.next.next.next = node3; 
// This is tedious. We'll advance later on.
sll.print();