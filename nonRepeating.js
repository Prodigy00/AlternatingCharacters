const Node = require('./Node');
const LinkedList = require('./LinkedList');
const prompt = require('prompt-sync')({ sigint: true });

const stringSplit = (str) => str.split('');
const input = prompt('Type your input: ');

const stringList = stringSplit(input);
const stringLength = stringList.length;

let nodeList = [];

for (let i = 0; i < stringLength; i++) {
  nodeList.push(new Node(stringList[i]));
}

const link = (nodeList) => {
  let i = 0;
  let list = [...nodeList];
  while (i < list.length) {
    list[i].next = list[i + 1];
    i++;
  }
  return list;
};

const linkedNodeList = link(nodeList);

const linkedList = new LinkedList(linkedNodeList[0]);

const getDeletions = (list) => {
  let deleteCount = 0;

  if (!list) return 'list cannot be empty';

  let head = list.getFirst();

  while (head.next !== undefined) {
    if (head.value !== head.next.value) {
      head = head.next;
    } else {
      let nodeToUnlink = head.next;
      let newNextHead = head.next.next;

      head.next = newNextHead;
      nodeToUnlink.next = null;

      deleteCount++;
    }
  }

  return deleteCount;
};

console.log({ deletions: getDeletions(linkedList) });
