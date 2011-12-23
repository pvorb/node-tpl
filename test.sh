#!/bin/sh

cd test

echo "This should print"
echo ""
echo "  <strong>test</strong>"
echo ""
echo "Output:"
echo ""
echo "  `tpl data/test.mkd`"
echo ""

cd ..
