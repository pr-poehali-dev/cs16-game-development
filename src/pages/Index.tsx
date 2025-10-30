import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [cheatMenuOpen, setCheatMenuOpen] = useState(false);
  const [aimbot, setAimbot] = useState(false);
  const [esp, setEsp] = useState(false);
  const [wallhack, setWallhack] = useState(false);
  const [connectingServer, setConnectingServer] = useState<string | null>(null);
  const [connectedServer, setConnectedServer] = useState<string | null>(null);
  const [inGame, setInGame] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'play', label: 'Игра', icon: 'Gamepad2' },
    { id: 'servers', label: 'Серверы', icon: 'Server' },
    { id: 'weapons', label: 'Оружие', icon: 'Crosshair' },
    { id: 'maps', label: 'Карты', icon: 'Map' },
    { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
    { id: 'rating', label: 'Рейтинг', icon: 'Trophy' },
    { id: 'shop', label: 'Магазин', icon: 'ShoppingCart' },
  ];

  const weapons = [
    { name: 'AK-47', damage: 36, price: 2700, icon: '🔫' },
    { name: 'M4A1', damage: 33, price: 3100, icon: '🔫' },
    { name: 'AWP', damage: 115, price: 4750, icon: '🎯' },
    { name: 'Desert Eagle', damage: 53, price: 700, icon: '💥' },
  ];

  const maps = [
    { name: 'de_dust2', players: 24, status: 'active' },
    { name: 'de_inferno', players: 18, status: 'active' },
    { name: 'de_mirage', players: 22, status: 'active' },
    { name: 'de_nuke', players: 16, status: 'medium' },
  ];

  const handleConnectToServer = (serverName: string) => {
    setConnectingServer(serverName);
    setTimeout(() => {
      setConnectingServer(null);
      setConnectedServer(serverName);
      setInGame(true);
      setActiveSection('play');
    }, 2000);
  };

  const handleStartGame = () => {
    const randomServer = maps[Math.floor(Math.random() * maps.length)].name;
    handleConnectToServer(randomServer);
  };

  const playerStats = {
    kills: 1547,
    deaths: 892,
    headshots: 423,
    accuracy: 47,
    winRate: 62,
    level: 42,
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg))] text-foreground font-rajdhani overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 pointer-events-none" />
      
      <header className="relative border-b border-neon-cyan/30 backdrop-blur-xl bg-card/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow tracking-wider">
              CS 1.6 <span className="text-neon-purple">CYBER</span>
            </h1>
            
            <div className="flex gap-4 items-center">
              <Badge variant="outline" className="border-neon-green text-neon-green neon-border px-4 py-2 text-sm">
                <Icon name="Wifi" size={16} className="mr-2" />
                ONLINE: 24/32
              </Badge>
              
              <Button
                onClick={() => setCheatMenuOpen(!cheatMenuOpen)}
                variant="outline"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 hover:text-white neon-border font-orbitron"
              >
                <Icon name="Code2" size={18} className="mr-2" />
                ЧИТ-МЕНЮ
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative flex">
        <aside className="w-64 border-r border-neon-cyan/30 backdrop-blur-xl bg-card/30 min-h-[calc(100vh-73px)] p-4">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-neon-cyan text-black neon-border'
                    : 'text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/10'
                }`}
              >
                <Icon name={item.icon as any} size={20} />
                <span className="font-orbitron tracking-wide">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-8 relative">
          {activeSection === 'home' && (
            <div className="space-y-8 animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl border border-neon-cyan/30 neon-border bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 p-12">
                <h2 className="text-6xl font-orbitron font-black text-white mb-4 neon-glow">
                  ДОБРО ПОЖАЛОВАТЬ
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  В киберпанк версию легендарного шутера Counter-Strike 1.6
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-orbitron font-bold neon-border text-lg px-8">
                    <Icon name="Play" size={20} className="mr-2" />
                    ИГРАТЬ СЕЙЧАС
                  </Button>
                  <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 font-orbitron neon-border">
                    <Icon name="Users" size={20} className="mr-2" />
                    НАЙТИ СЕРВЕР
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-6 hover:neon-border transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                      <Icon name="Target" size={24} className="text-neon-cyan" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold">Точность</h3>
                  </div>
                  <p className="text-4xl font-bold text-neon-cyan">{playerStats.accuracy}%</p>
                </Card>

                <Card className="bg-card/50 border-neon-purple/30 backdrop-blur-xl p-6 hover:neon-border transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center">
                      <Icon name="Zap" size={24} className="text-neon-purple" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold">Убийств</h3>
                  </div>
                  <p className="text-4xl font-bold text-neon-purple">{playerStats.kills}</p>
                </Card>

                <Card className="bg-card/50 border-neon-green/30 backdrop-blur-xl p-6 hover:neon-border transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center">
                      <Icon name="TrendingUp" size={24} className="text-neon-green" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold">Винрейт</h3>
                  </div>
                  <p className="text-4xl font-bold text-neon-green">{playerStats.winRate}%</p>
                </Card>
              </div>
            </div>
          )}

          {activeSection === 'weapons' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow mb-8">АРСЕНАЛ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {weapons.map((weapon) => (
                  <Card key={weapon.name} className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-6 hover:neon-border transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-orbitron font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                          {weapon.icon} {weapon.name}
                        </h3>
                        <p className="text-muted-foreground">Урон: <span className="text-neon-green font-bold">{weapon.damage}</span></p>
                      </div>
                      <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple">
                        ${weapon.price}
                      </Badge>
                    </div>
                    <Progress value={(weapon.damage / 115) * 100} className="h-2 bg-muted" />
                    <Button className="w-full mt-4 bg-neon-cyan hover:bg-neon-cyan/80 text-black font-orbitron font-bold">
                      ВЫБРАТЬ
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'servers' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow mb-8">СЕРВЕРЫ</h2>
              <div className="space-y-4">
                {maps.map((map) => (
                  <Card key={map.name} className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-6 hover:neon-border transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg bg-neon-cyan/20 flex items-center justify-center text-3xl">
                          🗺️
                        </div>
                        <div>
                          <h3 className="text-2xl font-orbitron font-bold">{map.name}</h3>
                          <p className="text-muted-foreground">Игроков: {map.players}/32</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={map.status === 'active' ? 'bg-neon-green/20 text-neon-green border-neon-green pulse-neon' : 'bg-yellow-500/20 text-yellow-500'}>
                          {map.status === 'active' ? 'АКТИВЕН' : 'СРЕДНЯЯ'}
                        </Badge>
                        <Button 
                          onClick={() => handleConnectToServer(map.name)}
                          disabled={connectingServer === map.name}
                          className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-orbitron font-bold disabled:opacity-50"
                        >
                          {connectingServer === map.name ? (
                            <>
                              <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                              ПОДКЛЮЧЕНИЕ...
                            </>
                          ) : (
                            <>
                              <Icon name="LogIn" size={18} className="mr-2" />
                              ПОДКЛЮЧИТЬСЯ
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'stats' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow mb-8">СТАТИСТИКА</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-6 text-center">
                  <Icon name="Skull" size={32} className="mx-auto mb-2 text-neon-cyan" />
                  <p className="text-sm text-muted-foreground mb-1">Убийств</p>
                  <p className="text-3xl font-bold text-neon-cyan">{playerStats.kills}</p>
                </Card>
                
                <Card className="bg-card/50 border-neon-purple/30 backdrop-blur-xl p-6 text-center">
                  <Icon name="X" size={32} className="mx-auto mb-2 text-neon-purple" />
                  <p className="text-sm text-muted-foreground mb-1">Смертей</p>
                  <p className="text-3xl font-bold text-neon-purple">{playerStats.deaths}</p>
                </Card>
                
                <Card className="bg-card/50 border-neon-green/30 backdrop-blur-xl p-6 text-center">
                  <Icon name="Crosshair" size={32} className="mx-auto mb-2 text-neon-green" />
                  <p className="text-sm text-muted-foreground mb-1">Хедшотов</p>
                  <p className="text-3xl font-bold text-neon-green">{playerStats.headshots}</p>
                </Card>
                
                <Card className="bg-card/50 border-yellow-500/30 backdrop-blur-xl p-6 text-center">
                  <Icon name="Star" size={32} className="mx-auto mb-2 text-yellow-500" />
                  <p className="text-sm text-muted-foreground mb-1">Уровень</p>
                  <p className="text-3xl font-bold text-yellow-500">{playerStats.level}</p>
                </Card>
              </div>

              <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-6">
                <h3 className="text-2xl font-orbitron font-bold mb-6">K/D Соотношение</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Точность</span>
                      <span className="text-neon-cyan font-bold">{playerStats.accuracy}%</span>
                    </div>
                    <Progress value={playerStats.accuracy} className="h-3 bg-muted" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Винрейт</span>
                      <span className="text-neon-green font-bold">{playerStats.winRate}%</span>
                    </div>
                    <Progress value={playerStats.winRate} className="h-3 bg-muted" />
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'rating' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow mb-8">РЕЙТИНГ</h2>
              <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-8">
                <div className="flex items-center justify-center flex-col gap-4">
                  <Icon name="Trophy" size={64} className="text-yellow-500" />
                  <h3 className="text-3xl font-orbitron font-bold">ТОП-100</h3>
                  <p className="text-muted-foreground">Рейтинговая система в разработке</p>
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'shop' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow mb-8">МАГАЗИН</h2>
              <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-8">
                <div className="flex items-center justify-center flex-col gap-4">
                  <Icon name="ShoppingCart" size={64} className="text-neon-purple" />
                  <h3 className="text-3xl font-orbitron font-bold">СКОРО ОТКРЫТИЕ</h3>
                  <p className="text-muted-foreground">Покупка скинов и улучшений</p>
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'maps' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow mb-8">КАРТЫ</h2>
              <div className="grid grid-cols-2 gap-6">
                {maps.map((map) => (
                  <Card key={map.name} className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-6 hover:neon-border transition-all">
                    <div className="text-6xl mb-4 text-center">🗺️</div>
                    <h3 className="text-2xl font-orbitron font-bold text-center mb-2">{map.name}</h3>
                    <p className="text-center text-muted-foreground">Классическая карта</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'play' && (
            <div className="space-y-6 animate-fade-in">
              {inGame ? (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow">ИГРА: {connectedServer}</h2>
                    <div className="flex gap-2">
                      <Badge className="bg-neon-green/20 text-neon-green border-neon-green pulse-neon px-4 py-2">
                        <Icon name="Users" size={16} className="mr-2" />
                        24/32
                      </Badge>
                      <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan px-4 py-2">
                        PING: 25ms
                      </Badge>
                    </div>
                  </div>

                  <div className="relative h-[600px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl border-2 border-neon-cyan/50 neon-border overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmZjJmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                    
                    <div className="absolute top-4 left-4 space-y-2">
                      <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-cyan/30">
                        <div className="flex items-center gap-2 text-neon-cyan font-orbitron">
                          <Icon name="Heart" size={20} />
                          <span className="font-bold">100 HP</span>
                        </div>
                      </div>
                      <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-purple/30">
                        <div className="flex items-center gap-2 text-neon-purple font-orbitron">
                          <Icon name="Shield" size={20} />
                          <span className="font-bold">100 ARMOR</span>
                        </div>
                      </div>
                      <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-yellow-500/30">
                        <div className="flex items-center gap-2 text-yellow-500 font-orbitron">
                          <span className="text-2xl">💰</span>
                          <span className="font-bold">$16,000</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 space-y-2">
                      <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-green/30">
                        <div className="text-neon-green font-orbitron font-bold text-lg">
                          УБИЙСТВ: {playerStats.kills}
                        </div>
                      </div>
                      <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-purple/30">
                        <div className="text-neon-purple font-orbitron font-bold text-lg">
                          СМЕРТЕЙ: {playerStats.deaths}
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                      <div className="bg-black/70 backdrop-blur-sm px-6 py-3 rounded-lg border border-neon-cyan/50 neon-border">
                        <div className="flex items-center gap-4">
                          <Icon name="Crosshair" size={32} className="text-neon-cyan" />
                          <div className="font-orbitron">
                            <div className="text-white font-bold text-xl">AK-47</div>
                            <div className="text-neon-cyan text-sm">30 / 90</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <Icon name="Crosshair" size={48} className="mx-auto text-neon-cyan opacity-50" />
                        <p className="text-white/70 font-orbitron">Используй WASD для движения</p>
                        <p className="text-white/70 font-orbitron">ЛКМ - стрелять | R - перезарядка</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center pt-4">
                    <Button 
                      onClick={() => {
                        setInGame(false);
                        setConnectedServer(null);
                      }}
                      variant="outline" 
                      className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 font-orbitron neon-border"
                    >
                      <Icon name="LogOut" size={18} className="mr-2" />
                      ВЫЙТИ ИЗ ИГРЫ
                    </Button>
                  </div>
                </>
              ) : connectedServer ? (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow">ИГРА НА СЕРВЕРЕ</h2>
                    <Badge className="bg-neon-green/20 text-neon-green border-neon-green pulse-neon px-4 py-2">
                      <Icon name="Wifi" size={16} className="mr-2" />
                      {connectedServer}
                    </Badge>
                  </div>

                  <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-12 text-center">
                    <div className="space-y-6">
                      <Icon name="Gamepad2" size={96} className="mx-auto text-neon-cyan animate-pulse" />
                      <h3 className="text-4xl font-orbitron font-bold text-white neon-glow">ВЫ В ИГРЕ!</h3>
                      <p className="text-xl text-muted-foreground">Подключение к серверу {connectedServer} успешно</p>
                      <div className="flex gap-4 justify-center pt-6">
                        <Button 
                          onClick={() => setConnectedServer(null)}
                          variant="outline" 
                          className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 font-orbitron neon-border"
                        >
                          <Icon name="LogOut" size={18} className="mr-2" />
                          ОТКЛЮЧИТЬСЯ
                        </Button>
                      </div>
                    </div>
                  </Card>
                </>
              ) : (
                <>
                  <h2 className="text-4xl font-orbitron font-black text-neon-cyan neon-glow mb-8">РЕЖИМЫ ИГРЫ</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-xl p-8 hover:neon-border transition-all">
                      <Icon name="Crosshair" size={48} className="text-neon-cyan mb-4" />
                      <h3 className="text-3xl font-orbitron font-bold mb-4">DEATHMATCH</h3>
                      <p className="text-muted-foreground mb-6">Классический режим свободной игры</p>
                      <Button 
                        onClick={handleStartGame}
                        className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-black font-orbitron font-bold"
                      >
                        ИГРАТЬ
                      </Button>
                    </Card>

                    <Card className="bg-card/50 border-neon-purple/30 backdrop-blur-xl p-8 hover:neon-border transition-all">
                      <Icon name="Target" size={48} className="text-neon-purple mb-4" />
                      <h3 className="text-3xl font-orbitron font-bold mb-4">COMPETITIVE</h3>
                      <p className="text-muted-foreground mb-6">Соревновательный режим 5 на 5</p>
                      <Button 
                        onClick={handleStartGame}
                        className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white font-orbitron font-bold"
                      >
                        ИГРАТЬ
                      </Button>
                    </Card>
                  </div>
                </>
              )}
            </div>
          )}
        </main>

        {cheatMenuOpen && (
          <aside className="w-80 border-l border-neon-purple/30 backdrop-blur-xl bg-card/30 min-h-[calc(100vh-73px)] p-6 animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-orbitron font-bold text-neon-purple neon-glow">ЧИТ-МЕНЮ</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCheatMenuOpen(false)}
                className="text-neon-purple hover:bg-neon-purple/20"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/50 border-neon-purple/30 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Icon name="Target" size={20} className="text-neon-cyan" />
                    <span className="font-orbitron font-medium">AIM BOT</span>
                  </div>
                  <Switch checked={aimbot} onCheckedChange={setAimbot} className="data-[state=checked]:bg-neon-cyan" />
                </div>
                <p className="text-xs text-muted-foreground">Автоматическое наведение на цели</p>
              </Card>

              <Card className="bg-card/50 border-neon-purple/30 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Icon name="Eye" size={20} className="text-neon-green" />
                    <span className="font-orbitron font-medium">ESP</span>
                  </div>
                  <Switch checked={esp} onCheckedChange={setEsp} className="data-[state=checked]:bg-neon-green" />
                </div>
                <p className="text-xs text-muted-foreground">Видимость противников через стены</p>
              </Card>

              <Card className="bg-card/50 border-neon-purple/30 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Icon name="Scan" size={20} className="text-neon-purple" />
                    <span className="font-orbitron font-medium">WALLHACK</span>
                  </div>
                  <Switch checked={wallhack} onCheckedChange={setWallhack} className="data-[state=checked]:bg-neon-purple" />
                </div>
                <p className="text-xs text-muted-foreground">Стрельба сквозь препятствия</p>
              </Card>

              <div className="pt-4 border-t border-neon-purple/30">
                <p className="text-xs text-muted-foreground text-center mb-4">
                  ⚠️ Используйте на свой страх и риск
                </p>
                <Button 
                  className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white font-orbitron font-bold neon-border"
                  disabled={!aimbot && !esp && !wallhack}
                >
                  <Icon name="Zap" size={18} className="mr-2" />
                  ПРИМЕНИТЬ ЧИТЫ
                </Button>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Index;