import classNames from "classnames";

import styles from "./MaskSVG.module.scss"

function MaskSVG(props) {
    const {
        url = 'discord',
        className,
    } = props;

    const sx = {
        '--path': `url('/images/${url}.svg');`
    }

    return <span className={classNames(styles.Component, `w-5 h-5`, className)} style={sx}/>
}

export default MaskSVG;