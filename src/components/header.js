import { useSelector, useDispatch  } from 'react-redux';
import { Container,Toolbar, Typography, makeStyles, AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import { handleShow } from './../store/products';
const useStyles = makeStyles(() => ({
	title: {
		flexGrow: 1,
		color: 'black',
		fontSize: '2em',
	},

	navBar: {
		background: '#aaa',
		width: '100%',
	},
}));

const Header = () => {
	const { title, navBar } = useStyles();
	const state = useSelector((state) => {
		return {
			TotalInventoryCount: state.products.TotalInventoryCount,
			show: state.products.show,
		};
	});

	const dispatch = useDispatch();

	return (
		<Container>
		<AppBar className={navBar}>
			<Toolbar>
				<Typography variant="h6" className={title}>
					OUR STORE
				</Typography>
				<Typography variant="h6" className={title}
				onClick={() => {
							dispatch(handleShow(!state.show));
						}}
					>
						<IconButton
							color="primary"
							aria-label="add to shopping cart"
							style={{ float: 'right' }}
						>
							chart({state.TotalInventoryCount})
						</IconButton>
				</Typography>
			</Toolbar>
		</AppBar>
		</Container>
	);
};

export default Header;