import type { FiberNode } from "./fiber"
export function traverse(node: FiberNode | null): Array<string> {
	let res: Array<string> = []
	function traverseNode(currentNode: FiberNode | null) {
		if (currentNode === null) {
			return
		} else {
			res.push(currentNode.type)
			if (currentNode.child) {
				traverseNode(currentNode.child)
				res.push(currentNode.type)
			} else {
				res.push(currentNode.type)
			}
			if (currentNode.sibling) {
				traverseNode(currentNode.sibling)
			}
		}
	}
	traverseNode(node)
	return res
}
