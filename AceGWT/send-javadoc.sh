#! /bin/bash

# Send generated javadoc to homepage working directory

(cd doc && tar cf - .) | ssh dhovemey@camel.ycp.edu 'cd work/homepage/acegwt/api && tar xvf -'
