// Definition for singly-linked list node
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// function to find the middle of the linked list
let middleNode = function(head){
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// create the linked list
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// call the linked list
const middle = middleNode(head);
console.log(middle.value)
