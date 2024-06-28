const icon = new Proxy({"src":"/_astro/icon.kN5JOmWF.svg","width":3005,"height":2106,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/icon.svg";
							}
							
							return target[name];
						}
					});

export { icon as i };
