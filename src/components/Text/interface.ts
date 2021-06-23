import React from 'react'

export interface TitleProps {
  children: React.ReactNode
  variant: 'huge' | 'big' | 'medium' | 'small' | 'tiny'
}

export interface SubtitleProps {
  children: React.ReactNode
  variant: 'big' | 'medium' | 'small'
}

export interface BodyProps {
  children: React.ReactNode
  variant: 'big' | 'medium' | 'small'
}