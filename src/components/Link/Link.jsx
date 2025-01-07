import PropTypes from "prop-types";

const Link = ({route}) => {
    return (
        <div className="text-white">
            <li
            className="mr-10 hover:bg-slate-500 rounded-md px-1"
                ><a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}
export default Link;