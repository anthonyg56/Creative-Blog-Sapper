import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, D as query_selector_all, g as detach_dev, n as noop } from './index.c0d91291.js';

/* src/routes/poetry/index.svelte generated by Svelte v3.18.0 */

function create_fragment(ctx) {
	const block = {
		c: function create() {
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1a1hzwi\"]", document.head);
			head_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Poetry";
		},
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class Poetry extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Poetry",
			options,
			id: create_fragment.name
		});
	}
}

export default Poetry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNGRjNmUwMzkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=