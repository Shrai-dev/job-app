import { FC } from 'react'
import { IButtonProps } from '../../types'

export const ApplyButton: FC<IButtonProps> = ({className, buttonText}) => {
	return (
		<button className={className} type='button'>
			{buttonText}
		</button>
	)
}
