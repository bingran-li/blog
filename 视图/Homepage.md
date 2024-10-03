---
comment: true
---
#MOC

```dataviewjs
	let pages= dv.pages("#CS")
	dv.table(
		['Name','Create'],
		pages.sort(b=>b.file.mtime,'desc')
			.map(b=>[b.file.link,b.file.ctime])
	)
```
