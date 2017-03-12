import test from 'ava';
import fn from '../';
import './setup';

const id = str => document.getElementById(str);

const elms = {};
const body = document.body;

['a1', 'b1', 'b2', 'c1'].map(e => elms[e] = id(e));

test('empty node, finds sibling', t => {
	t.is( fn(elms.b1), elms.b2 );
});

test('container node, finds child', t => {
	t.is( fn(elms.a1), elms.b1 );
});

test('last child, exits container', t => {
	t.is( fn(elms.b2), elms.c1 );
});

test('last child, prevent container exit', t => {
	t.is( fn(elms.b2, elms.a1), null );
});
