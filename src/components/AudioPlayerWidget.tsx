import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, 
  Disc, Sparkles, Music, Upload, ChevronDown, ChevronUp, Radio
} from 'lucide-react';
import { audioEngine, Mp3Track } from '../utils/audioEngine';

export const AudioPlayerWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [sfxOn, setSfxOn] = useState<boolean>(true);
  const [currentTrack, setCurrentTrack] = useState<Mp3Track>(audioEngine.getCurrentTrack());
  const [playlist, setPlaylist] = useState<Mp3Track[]>(audioEngine.getPlaylist());
  const [volume, setVolume] = useState<number>(audioEngine.getVolume());
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe(() => {
      setIsPlaying(audioEngine.isMusicRunning());
      setSfxOn(audioEngine.isSfxOn());
      setCurrentTrack(audioEngine.getCurrentTrack());
      setPlaylist(audioEngine.getPlaylist());
      setVolume(audioEngine.getVolume());
      setCurrentTime(audioEngine.getCurrentTime());
      setDuration(audioEngine.getDuration());
    });
    return unsubscribe;
  }, []);

  const handleTogglePlay = async () => {
    audioEngine.playTap();
    await audioEngine.toggleMusic();
  };

  const handleNext = () => {
    audioEngine.playTap();
    audioEngine.nextTrack();
  };

  const handlePrev = () => {
    audioEngine.playTap();
    audioEngine.prevTrack();
  };

  const handleSelectTrack = (index: number) => {
    audioEngine.playSelect();
    audioEngine.setTrack(index);
    if (!isPlaying) {
      audioEngine.playMusic();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      audioEngine.playSuccess();
      audioEngine.loadCustomMp3(file);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-[#050906] border-y border-lime-500/30 px-3 py-2 transition-all relative">
      <div className="max-w-md mx-auto">
        
        {/* Main Bar: Compact Controls */}
        <div className="flex items-center justify-between gap-2">
          
          {/* Left: Play/Pause Button + Song Info */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <button
              onClick={handleTogglePlay}
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all active:scale-95 ${
                isPlaying
                  ? 'bg-gradient-to-r from-[#25D366] to-[#10E836] text-black border-lime-300 shadow-[0_0_15px_rgba(16,232,54,0.6)]'
                  : 'bg-neutral-900 text-lime-400 border-lime-400/40 hover:border-lime-400 hover:bg-neutral-800'
              }`}
              title={isPlaying ? "Pausar música MP3" : "Reproducir música electrónica MP3"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-black text-black" />
              ) : (
                <Play className="w-4 h-4 fill-lime-400 text-lime-400 ml-0.5" />
              )}
            </button>

            {/* Song Meta / Title */}
            <div 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex flex-col min-w-0 cursor-pointer text-left group"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-xs text-white truncate group-hover:text-lime-400 transition-colors">
                  {currentTrack.name}
                </span>
                {isPlaying && (
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping shrink-0" />
                )}
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 leading-none">
                <span className="text-lime-400 font-semibold">{currentTrack.genre}</span>
                <span>•</span>
                <span>{formatTime(currentTime)}</span>
              </div>
            </div>
          </div>

          {/* Center/Right: Visualizer & Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Animated Equalizer Waves */}
            <div 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-end gap-0.5 h-4 px-1 cursor-pointer" 
              title="Abrir reproductor"
            >
              {[1, 2, 3, 4].map((bar) => (
                <span
                  key={bar}
                  className={`w-1 rounded-t transition-all ${
                    isPlaying 
                      ? 'bg-lime-400 shadow-[0_0_4px_#10E836] animate-pulse' 
                      : 'bg-neutral-700 h-1'
                  }`}
                  style={{
                    height: isPlaying ? `${30 + ((bar * 23) % 70)}%` : '20%',
                    animationDuration: `${0.4 + bar * 0.15}s`
                  }}
                />
              ))}
            </div>

            {/* Quick Next Track */}
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white hover:border-lime-400/50 active:scale-95 transition-all"
              title="Siguiente pista MP3"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>

            {/* SFX Button Toggle */}
            <button
              onClick={() => audioEngine.toggleSfx()}
              className={`p-1.5 rounded-lg border text-xs font-bold transition-all active:scale-95 ${
                sfxOn
                  ? 'bg-neutral-900 border-lime-400/40 text-lime-400'
                  : 'bg-neutral-950 border-neutral-800 text-gray-500'
              }`}
              title={sfxOn ? "Efectos táctiles de botones activos" : "Efectos silenciados"}
            >
              {sfxOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Dropdown Expand Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-lime-400 hover:bg-neutral-800 transition-all"
              title={isExpanded ? "Ocultar pistas" : "Ver lista de temas MP3"}
            >
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

        {/* Playback Progress Line */}
        <div 
          onClick={(e) => {
            if (duration > 0) {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              audioEngine.seek(pos * duration);
            }
          }}
          className="w-full h-1 bg-neutral-800 rounded-full mt-2 cursor-pointer relative overflow-hidden"
        >
          <div 
            className="h-full bg-gradient-to-r from-lime-500 to-emerald-400 transition-all duration-100"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Expanded Drawer: Playlist, Volume & Custom MP3 Upload */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-neutral-800/90 space-y-3">
            
            {/* Playlist Selection */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-heading font-bold text-lime-400 uppercase tracking-wider flex items-center gap-1">
                  <Music className="w-3 h-3" />
                  Pistas Electrónicas MP3 Disponibles:
                </span>
                <span className="text-[10px] text-gray-400">
                  {playlist.length} temas
                </span>
              </div>

              <div className="space-y-1">
                {playlist.map((track, idx) => {
                  const isSelected = currentTrack.id === track.id;
                  return (
                    <button
                      key={track.id}
                      onClick={() => handleSelectTrack(idx)}
                      className={`w-full p-2 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-lime-500/15 border-lime-400 text-white font-bold shadow-sm'
                          : 'bg-neutral-900/60 border-neutral-800/80 text-gray-300 hover:bg-neutral-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-xs text-lime-400 font-mono">{idx + 1}.</span>
                        <div className="truncate">
                          <p className="text-xs truncate">{track.name}</p>
                          <p className="text-[9px] text-gray-400 leading-none mt-0.5">{track.genre}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {isSelected && isPlaying && (
                          <span className="text-[10px] text-lime-400 font-bold uppercase animate-pulse">
                            Sonando
                          </span>
                        )}
                        <span className="text-[10px] text-gray-400 font-mono">
                          {track.durationApprox || ''}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Volume & Custom Upload Row */}
            <div className="flex items-center justify-between gap-3 pt-1 border-t border-neutral-800/60">
              {/* Volume Slider */}
              <div className="flex items-center gap-2 flex-1">
                <Volume2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => audioEngine.setVolume(parseFloat(e.target.value))}
                  className="w-full accent-lime-400 h-1 bg-neutral-800 rounded cursor-pointer"
                  title="Volumen"
                />
                <span className="text-[10px] text-gray-400 font-mono w-7 text-right">
                  {Math.round(volume * 100)}%
                </span>
              </div>

              {/* Upload Own MP3 File Button */}
              <div>
                <input
                  type="file"
                  accept="audio/mp3,audio/*"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1 bg-neutral-900 hover:bg-neutral-800 border border-lime-400/30 text-lime-400 text-[10px] font-bold py-1 px-2 rounded-lg active:scale-95 transition-all"
                  title="Subir tu propia canción en MP3"
                >
                  <Upload className="w-3 h-3" />
                  <span>Subir MP3 Propio</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
