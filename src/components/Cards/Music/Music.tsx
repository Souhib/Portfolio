import React, { useRef, useState } from 'react'

import { Box } from '@material-ui/core'
import { Howl } from 'howler'

import { Spotify } from 'assets/img'
import { Pause, Play, Previous, Next } from 'assets/img'
import { ExperienceProps } from 'components/Cards/interfaces'
import { SongsInterface } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Title from 'components/Text/Title/Title'
import { SongsInformations, PlaylistProps } from 'data/data'

import useStyles from './styles'

const Music: React.FunctionComponent<ExperienceProps> = ({
  bgColor,
}: ExperienceProps) => {
  const classes = useStyles()
  const [ isHovered, setIsHovered ] = useState(false)
  const [ logoToDisplay, setLogoToDisplay ] = useState(Spotify)


  const initHowlerPlaylist = () => {
    const allSongs: SongsInterface = {}
    for (const song of SongsInformations) {
      allSongs[song.title] = new Howl({
        src: song.src,
        volume: 0.1,
        onend: () => nextMusic()
      })
    }
    return allSongs
  }

  const playlistSong = useRef<SongsInterface>(initHowlerPlaylist())
  const numberOfmusic = SongsInformations.length

  const currentSound = useRef<PlaylistProps>({
    title: SongsInformations[0].title,
    artist: SongsInformations[0].artist,
    src: SongsInformations[0].src
  })
  const [artist, setArtist] = useState(SongsInformations[0].artist)
  const [title, setTitle] = useState(SongsInformations[0].title)

  const getCurrentSound = () => {
    return SongsInformations.findIndex(x => x.title === currentSound.current.title)
  }

  const nextMusic = () => {
    const currentSoundIndex = getCurrentSound()
    playlistSong.current[currentSound.current.title].stop()
    if (currentSoundIndex === numberOfmusic - 1) {
      currentSound.current = {
        title: SongsInformations[0].title,
        artist: SongsInformations[0].artist,
        src: SongsInformations[0].src
      }
    }
    else {
      currentSound.current = {
        title: SongsInformations[currentSoundIndex + 1].title,
        artist: SongsInformations[currentSoundIndex + 1].artist,
        src: SongsInformations[currentSoundIndex + 1].src
      }
    }
    playlistSong.current[currentSound.current.title].play()
    setTitle(currentSound.current.title)
    setArtist(currentSound.current.artist)
  }

  const previousMusic = () => {
    const currentSoundIndex = getCurrentSound()
    playlistSong.current[currentSound.current.title].stop()

    if (currentSoundIndex === 0) {
      currentSound.current = {
        title: SongsInformations[numberOfmusic - 1].title,
        artist: SongsInformations[numberOfmusic - 1].artist,
        src: SongsInformations[numberOfmusic - 1].src
      }
    }
    else {
      currentSound.current = {
        title: SongsInformations[currentSoundIndex - 1].title,
        artist: SongsInformations[currentSoundIndex - 1].artist,
        src: SongsInformations[currentSoundIndex - 1].src
      }
    }
    playlistSong.current[currentSound.current.title].play()
    setTitle(currentSound.current.title)
    setArtist(currentSound.current.artist)
  }

  const stopMusic = () => {
    if (playlistSong.current[currentSound.current.title].playing() === true) {
      playlistSong.current[currentSound.current.title].stop()
    }
  }

  const playAndPauseMusic = () => {
    if (playlistSong.current[currentSound.current.title].playing() === false) {
      playlistSong.current[currentSound.current.title].play()
      setLogoToDisplay(Pause)
    }
    else {
      playlistSong.current[currentSound.current.title].pause()
      setLogoToDisplay(Play)
    }
  }


  if (isHovered === true) {
    setTimeout(() => {
      if (playlistSong.current[currentSound.current.title].playing() === false) {
        setLogoToDisplay(Play)
      }
      else {
        setLogoToDisplay(Pause)
      }
    }, 500)
  }
  else {
    setTimeout(() => {
      setLogoToDisplay(Spotify)
      stopMusic()
    }, 300)
  }

  const containerStyle = {
    borderRadius: 16,
    border: `2px solid ${isHovered ? '#FFFFFF' : bgColor}`,
    transition: '.5s',
  }

  return (
    <Box
      bgcolor={bgColor}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={containerStyle}
    >
      <Stack
        className={classes.experienceCard}
        spacing={1}
        verticalAlign='center'
      >
        <Stack
          horizontalAlign='center'
          spacing={2}
          verticalAlign='center'
        >
          <Title
            className={classes.texte}
            variant='huge'
          >Music</Title>
          <Stack
            className={classes.songTitle}
            horizontalAlign='center'
            spacing={2}
            verticalAlign='center'
          >
            <Title
              textAlign='center'
              variant='medium'
            >{artist + ' - ' + title}</Title>
          </Stack>
          <Stack
            horizontalAlign='center'
            isRow
            spacing={4}
            verticalAlign='center'
          >
            <Logo
              className={classes.nextAndPrevious}
              horizontalAlign='center'
              logo={Previous}
              onClick={previousMusic}
              variant='tiny'
            />
            <Logo
              className={classes.logo}
              horizontalAlign='center'
              logo={logoToDisplay}
              onClick={playAndPauseMusic}
              variant='medium'
            />
            <Logo
              className={classes.nextAndPrevious}
              horizontalAlign='center'
              logo={Next}
              onClick={nextMusic}
              variant='tiny'
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Music
