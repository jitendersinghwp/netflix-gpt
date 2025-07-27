import { IMG_CDN_URL } from "../utils/constants"

export const MovieCard = ({posterPath, title}) => {
  return (
    <div>
        <img src={IMG_CDN_URL + posterPath} alt={title} />
    </div>
  )
}
