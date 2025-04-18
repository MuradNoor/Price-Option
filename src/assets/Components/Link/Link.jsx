

const Link = ({route}) => {
    return (
        <div >
            <li className="mr-10 hover:bg-purple-300 p-1 rounded-lg"><a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;