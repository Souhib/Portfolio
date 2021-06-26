import React from 'react'

export interface TitleProps {
  color?: string
  children: React.ReactNode
  variant: 'huge' | 'big' | 'medium' | 'small' | 'tiny'
  textAlign?: 'left' | 'center' | 'right'
}

export interface SubtitleProps {
  animation?: 'slideIn'
  animationDelay?: string
  children: React.ReactNode
  variant: 'big' | 'medium' | 'small' | 'tiny'
  textAlign?: 'left' | 'center' | 'right'
}

export interface BodyProps {
  children: React.ReactNode
  variant: 'big' | 'medium' | 'small'
  textAlign?: 'left' | 'center' | 'right'
}