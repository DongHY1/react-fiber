type DOMType = 'div' | 'main' | 'span' | 'p' | 'h1'
export type FiberNode = {
    child: FiberNode | null;
    sibling: FiberNode | null;
    return: FiberNode | null;
    type: DOMType;
    val: string | null
};


/**
 * <div>
 * 	<span>1</span>
 * 	<main>
 * 	`<p>2</p>
 * </main>
 * <h1>3</h1>
 * </div>
 */

export const node1: FiberNode = {
    val: null,
    type: 'div',
    child: null,
    sibling: null,
    return: null
}
const node2: FiberNode = {
    val: '1',
    type: 'span',
    child: null,
    sibling: null,
    return: null
}
const node3: FiberNode = {
    val: null,
    type: 'main',
    child: null,
    sibling: null,
    return: null
}
const node4: FiberNode = {
    val: '2',
    type: 'p',
    child: null,
    sibling: null,
    return: null
}

const node5: FiberNode = {
    val: '3',
    type: 'h1',
    child: null,
    sibling: null,
    return: null
}

node1.child = node2

node2.return = node1
node2.sibling = node3

node3.child = node4
node3.sibling = node5
node3.return = node1

node4.return = node3

node5.return = node1

