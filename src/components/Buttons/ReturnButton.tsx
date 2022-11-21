import { FC } from 'react'
import arrowBackIcon from '../../assets/icons/arrow-back.svg'
import { IButtonProps } from '../../types'

export const ReturnButton: FC<IButtonProps> = ({className}) => {
	return (
		<button className={className} type='button'>
			<img className='w-6 h-6 mr-3' src={arrowBackIcon} alt="back" />
			return to job board
		</button>
	)
}
