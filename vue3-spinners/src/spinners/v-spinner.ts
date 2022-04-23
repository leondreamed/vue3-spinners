import { defineComponent, h } from 'vue';

import useSpinner, { spinnerProps } from '~/utils/use-spinner.js';

export default defineComponent({
	name: 'VSpinner',

	props: {
		...spinnerProps,

		thickness: {
			type: Number,
			default: 5,
		},
	},

	setup(props) {
		const { cSize, classes } = useSpinner(props);

		return () =>
			h(
				'svg',
				{
					class: classes.value + ' v-spinner-mat',
					width: cSize.value,
					height: cSize.value,
					viewBox: '25 25 50 50',
				},
				[
					h('circle', {
						class: 'path',
						cx: '50',
						cy: '50',
						r: '20',
						fill: 'none',
						stroke: 'currentColor',
						'stroke-width': props.thickness,
						'stroke-miterlimit': '10',
					}),
				]
			);
	},
});