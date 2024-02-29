import React from 'react'

interface ErrorProps{
	error: string
}

export default function Error({error} : ErrorProps) {
	return (
		<p className="text-center text-red-800">{error}</p>
	)
}
