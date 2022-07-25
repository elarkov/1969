import smartgrid from "smart-grid";

export const grid = (done) => {
	let settings = {
		outputStyle: 'scss',
		columns: 12,
		offset: "10px",
		mobileFirst: true,
		container: {
			maxWidth: "1140px",
			fields: "10px"
		},
		breakPoints: {
      lg: {
				width: "1200px",
			},
			xl: {
				width: "1024px",
			},
			md: {
				width: "768px",
			},
			sm: {
				width: "576px"
			},
			xs: {
				width: "375px",
			}
		},
	};
	smartgrid('src/scss/vendors', settings);
	done();
}