import { classNames } from 'utils'

type Size = 'small' | 'medium' | 'large'

type AvatarProps = {
  size?: string,
  tags: Array<string>
}

const sizes: Record<any,string> = {
  small: 'w-14 h-8',
  medium: 'w-auto h-12',
  large: 'w-auto h-14'
}

const MapTags = (props: AvatarProps) => {
  const {size = 'medium', tags = []} = props;
  return tags.map((ele, index) => {
    return (
      <span
        key={index}
        className={classNames(
          'rounded-full border-2 border-black px-3 py-1 font-semibold flex items-center justify-center',
          (sizes[size])
        )}
      >
        {ele}
      </span>
    )
  })
}

export const PillTags = ({
  tagList = [
    'ajwhd',
    'ajwhd',
    'ahhbnf',
    'yehef',
    'awhjh',
    'irtoiweb',
    'iawgvjakwd'
  ],
  size="medium",
}) => {
  return (
    <div className={`flex w-auto items-center justify-around gap-3`}>
      <MapTags tags={tagList} size={size}/>
    </div>
  )
}
