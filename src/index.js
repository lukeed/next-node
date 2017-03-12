/**
 * Get the next Node within a container; without leaving container.
 * @param  {Node} node      The initial node.
 * @param  {Node} container The container.
 * @return {Node}           The next node.
 */
export default function (node, container) {
	if (node.firstChild) return node.firstChild;
	while (node) {
		// do not walk out of the container
		if (node == container) return null;
		if (node.nextSibling) return node.nextSibling;
		node = node.parentNode;
	}
};
