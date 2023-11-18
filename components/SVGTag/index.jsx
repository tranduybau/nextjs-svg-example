/**
 * Renders an SVG tag based on the provided props.
 *
 * @param {Object} props - The props for the SVG tag.
 * @param {string} props.src - The source of the SVG.
 * @param {string} props.className - The class name of the SVG.
 * @param {number} props.width - The width of the SVG.
 * @param {number} props.height - The height of the SVG.
 * @param {Object} props.other - Other props for the SVG.
 * @return {JSX.Element} The rendered SVG tag.
 *
 * @NOTE:
 * Remember to add `id="id"` to the SVG tag and change fill or stroke to currentColor.
 */

function SVGTag(props) {
    const {
        src,
        className,
        ...other
    } = props;

    return (
        <svg width={20} height={20} className={className} {...other} >
            <use href={src} width={20} height={20} {...other} />
        </svg>
    )
}

export default SVGTag;