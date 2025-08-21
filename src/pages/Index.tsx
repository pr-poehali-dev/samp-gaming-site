import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [promoCode, setPromoCode] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const handlePromoCode = () => {
    if (promoCode.trim()) {
      toast({
        title: "Промокод активирован! 🎉",
        description: `Код "${promoCode}" успешно применен`,
      });
      setPromoCode('');
    } else {
      toast({
        title: "Ошибка",
        description: "Введите промокод",
        variant: "destructive",
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-gaming-orange to-gaming-cyan bg-clip-text text-transparent">
            Aurora Role Play
          </div>
          <div className="hidden md:flex gap-6">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'rules', label: 'Правила', icon: 'FileText' },
              { id: 'donate', label: 'Донат', icon: 'DollarSign' },
              { id: 'forum', label: 'Форум', icon: 'MessageCircle' },
              { id: 'news', label: 'Новости', icon: 'Newspaper' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-accent ${
                  activeSection === item.id ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </button>
            ))}
          </div>
          <Button size="sm" className="bg-gaming-orange hover:bg-gaming-orange/90">
            Играть
          </Button>
        </div>
      </nav>

      <main className="pt-16">
        <section id="home" className="relative min-h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ 
              backgroundImage: `url('/img/c01055ef-c1fb-4d57-998f-8e18e0cb1986.jpg')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gaming-electric/50 to-background/90" />
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gaming-orange via-gaming-cyan to-gaming-blue bg-clip-text text-transparent">
                Aurora Role Play
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Лучший ролевой сервер с уникальными возможностями и захватывающим геймплеем
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                <div className="flex gap-2 w-full md:w-auto">
                  <Input
                    placeholder="Введите промокод..."
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="bg-card/50 border-border"
                    onKeyPress={(e) => e.key === 'Enter' && handlePromoCode()}
                  />
                  <Button onClick={handlePromoCode} className="bg-gaming-cyan hover:bg-gaming-cyan/90">
                    <Icon name="Gift" size={16} />
                  </Button>
                </div>
                <Button size="lg" className="bg-gaming-orange hover:bg-gaming-orange/90 text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Подключиться
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: 'Users', title: 'Онлайн игроков', value: '247', color: 'text-gaming-cyan' },
                  { icon: 'Server', title: 'Аптайм сервера', value: '99.9%', color: 'text-gaming-orange' },
                  { icon: 'MapPin', title: 'Локация', value: 'Los Santos', color: 'text-gaming-blue' }
                ].map((stat, index) => (
                  <Card key={index} className="bg-card/30 border-border/50 hover:scale-105 transition-transform">
                    <CardContent className="p-6 text-center">
                      <Icon name={stat.icon as any} size={32} className={`mx-auto mb-3 ${stat.color}`} />
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.title}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="rules" className="py-20 bg-card/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gaming-orange to-gaming-cyan bg-clip-text text-transparent">
              Правила сервера
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    id: 'general',
                    title: 'Общие правила',
                    content: 'Уважайте других игроков, не используйте читы, играйте честно и получайте удовольствие от игры.'
                  },
                  {
                    id: 'roleplay',
                    title: 'Ролевая игра',
                    content: 'Соблюдайте ролевую составляющую, не нарушайте атмосферу игры, используйте адекватные имена персонажей.'
                  },
                  {
                    id: 'punishment',
                    title: 'Наказания',
                    content: 'За нарушения правил предусмотрены предупреждения, муты, кики и баны различной длительности.'
                  }
                ].map((rule) => (
                  <AccordionItem key={rule.id} value={rule.id} className="border border-border/50 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-primary">
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" size={20} className="text-gaming-orange" />
                        {rule.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-4 pb-2">
                      {rule.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="donate" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gaming-cyan to-gaming-blue bg-clip-text text-transparent">
              Пополнить баланс
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <Card className="relative overflow-hidden bg-gradient-to-b from-card/80 to-card border-border/50 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gaming-electric/5 to-transparent" />
                
                <CardHeader className="text-center relative z-10 pb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gaming-cyan/20 border-2 border-gaming-cyan/50 flex items-center justify-center mb-6">
                    <Icon name="CreditCard" size={36} className="text-gaming-cyan" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Пополнение баланса</CardTitle>
                  <p className="text-muted-foreground">Пополните игровой баланс на любую сумму</p>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  {/* Ник игрока */}
                  <div>
                    <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                      <Icon name="User" size={16} className="text-gaming-cyan" />
                      Ник в игре
                    </label>
                    <input 
                      type="text" 
                      placeholder="Введите ваш игровой ник"
                      className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaming-cyan focus:border-transparent transition-all"
                    />
                    <p className="text-xs text-muted-foreground mt-2">Баланс будет зачислен на этот аккаунт</p>
                  </div>

                  {/* Сумма пополнения */}
                  <div>
                    <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                      <Icon name="Coins" size={16} className="text-gaming-orange" />
                      Сумма пополнения
                    </label>
                    <div className="relative">
                      <input 
                        type="number" 
                        placeholder="1000"
                        min="50"
                        className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-gaming-cyan focus:border-transparent transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gaming-cyan font-bold text-xl">₽</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Минимальная сумма: 50₽</p>
                  </div>

                  {/* Быстрые суммы */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Быстрый выбор</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['100₽', '500₽', '1000₽'].map((amount) => (
                        <button 
                          key={amount}
                          className="px-4 py-3 bg-gaming-cyan/10 border border-gaming-cyan/30 rounded-lg hover:bg-gaming-cyan/20 hover:border-gaming-cyan transition-all text-gaming-cyan font-bold hover:scale-105"
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Email для чека */}
                  <div>
                    <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                      <Icon name="Mail" size={16} className="text-gaming-blue" />
                      Email для чека (опционально)
                    </label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaming-cyan focus:border-transparent transition-all"
                    />
                  </div>



                  {/* Способы оплаты */}
                  <div>
                    <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                      <Icon name="CreditCard" size={16} className="text-gaming-electric" />
                      Способ оплаты
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'Банковская карта', icon: 'CreditCard', popular: true },
                        { name: 'QIWI кошелек', icon: 'Wallet', popular: false },
                        { name: 'Steam Wallet', icon: 'Gamepad2', popular: false },
                        { name: 'Криптовалюта', icon: 'Bitcoin', popular: false }
                      ].map((method, index) => (
                        <button key={index} className={`p-4 border rounded-lg hover:scale-105 transition-all flex flex-col items-center gap-2 ${
                          method.popular 
                            ? 'bg-gaming-cyan/20 border-gaming-cyan text-gaming-cyan' 
                            : 'bg-card border-border/50 hover:border-gaming-cyan/50 hover:bg-gaming-cyan/10'
                        }`}>
                          <Icon name={method.icon as any} size={20} />
                          <span className="text-xs font-medium text-center">{method.name}</span>
                          {method.popular && <Badge className="bg-gaming-orange text-[10px] px-2">Популярный</Badge>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Информация о бонусах */}
                  <div className="bg-gaming-blue/10 border border-gaming-blue/30 rounded-lg p-4">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Icon name="Gift" size={18} className="text-gaming-orange" />
                      Бонусы за пополнение:
                    </h4>
                    <div className="space-y-2">
                      {[
                        { amount: '100-499₽', bonus: '+5% к балансу' },
                        { amount: '500-999₽', bonus: '+10% к балансу' },
                        { amount: '1000₽+', bonus: '+15% к балансу + VIP статус на день' }
                      ].map((bonus, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-card/30">
                          <span className="text-sm font-medium">{bonus.amount}</span>
                          <span className="text-sm text-gaming-orange font-bold">{bonus.bonus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-gaming-cyan to-gaming-blue hover:from-gaming-cyan/90 hover:to-gaming-blue/90 text-white font-bold py-4 shadow-lg hover:shadow-gaming-cyan/30 transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Icon name="CreditCard" size={20} />
                      Пополнить баланс
                    </span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    💰 Баланс зачисляется мгновенно после успешной оплаты
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="forum" className="py-20 bg-card/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gaming-blue to-gaming-cyan bg-clip-text text-transparent">
              Форум
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden bg-gradient-to-b from-card/80 to-card border-border/50 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gaming-electric/5 to-transparent" />
                
                <CardHeader className="text-center relative z-10 pb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gaming-blue/20 border-2 border-gaming-blue/50 flex items-center justify-center mb-6">
                    <Icon name="MessageCircle" size={36} className="text-gaming-blue" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Форум сообщества</CardTitle>
                  <p className="text-muted-foreground">Присоединяйтесь к обсуждениям, делитесь опытом и находите новых друзей</p>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  {/* Статистика форума */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gaming-cyan/10 border border-gaming-cyan/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gaming-cyan mb-1">2,547</div>
                      <div className="text-sm text-muted-foreground">Участников</div>
                    </div>
                    <div className="bg-gaming-orange/10 border border-gaming-orange/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gaming-orange mb-1">15,832</div>
                      <div className="text-sm text-muted-foreground">Сообщений</div>
                    </div>
                    <div className="bg-gaming-blue/10 border border-gaming-blue/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gaming-blue mb-1">1,234</div>
                      <div className="text-sm text-muted-foreground">Тем</div>
                    </div>
                  </div>

                  {/* Популярные разделы */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Icon name="Fire" size={20} className="text-gaming-orange" />
                      Популярные разделы
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: 'Общие обсуждения', posts: 523, icon: 'MessageSquare' },
                        { name: 'Новости сервера', posts: 89, icon: 'Newspaper' },
                        { name: 'Гайды и обучение', posts: 156, icon: 'BookOpen' },
                        { name: 'Поиск команды', posts: 234, icon: 'Users' }
                      ].map((section, index) => (
                        <div key={index} className="p-4 bg-gaming-cyan/10 border border-gaming-cyan/30 rounded-lg hover:bg-gaming-cyan/20 transition-colors cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Icon name={section.icon as any} size={20} className="text-gaming-cyan" />
                              <div>
                                <div className="font-medium">{section.name}</div>
                                <div className="text-sm text-muted-foreground">{section.posts} сообщений</div>
                              </div>
                            </div>
                            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Последняя активность */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-gaming-electric" />
                      Последняя активность
                    </h3>
                    <div className="space-y-3">
                      {[
                        { title: 'Новое событие на сервере', author: 'AdminTeam', time: '5 мин назад' },
                        { title: 'Обсуждение изменений в PvP', author: 'Player_Pro', time: '23 мин назад' },
                        { title: 'Гайд по новичкам обновлен', author: 'Moderator_X', time: '1 час назад' }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-border/30">
                          <div>
                            <div className="font-medium text-sm">{activity.title}</div>
                            <div className="text-xs text-muted-foreground">от {activity.author}</div>
                          </div>
                          <div className="text-xs text-muted-foreground">{activity.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Кнопка перехода на форум */}
                  <div className="text-center pt-4">
                    <Button 
                      onClick={() => window.open('https://forum.example.com', '_blank')}
                      className="bg-gradient-to-r from-gaming-blue to-gaming-cyan hover:from-gaming-blue/90 hover:to-gaming-cyan/90 text-white font-bold py-4 px-8 shadow-lg hover:shadow-gaming-blue/30 transition-all duration-300 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Icon name="ExternalLink" size={20} />
                        Перейти на форум
                      </span>
                      <div className="absolute inset-0 bg-white/10 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">
                      🌐 Откроется в новой вкладке
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="news" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gaming-orange to-gaming-blue bg-clip-text text-transparent">
              Новости
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Масштабное обновление 2.0',
                  date: '15 августа 2025',
                  preview: 'Новые локации, транспорт и возможности для игроков',
                  tag: 'Обновление'
                },
                {
                  title: 'Турнир на $10,000',
                  date: '12 августа 2025',
                  preview: 'Регистрация на крупнейший турнир сервера открыта',
                  tag: 'Событие'
                },
                {
                  title: 'Новые правила сервера',
                  date: '10 августа 2025',
                  preview: 'Обновленные правила для улучшения игрового процесса',
                  tag: 'Важное'
                }
              ].map((news, index) => (
                <Card key={index} className="hover:scale-105 transition-transform cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{news.tag}</Badge>
                      <span className="text-xs text-muted-foreground">{news.date}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3">{news.preview}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-gaming-orange to-gaming-cyan bg-clip-text text-transparent mb-4">
            Aurora Role Play
          </div>
          <p className="text-muted-foreground mb-6">
            Лучший игровой опыт начинается здесь
          </p>
          <div className="flex justify-center gap-6">
            {[
              { icon: 'MessageCircle', label: 'Discord' },
              { icon: 'MessageSquare', label: 'Telegram' },
              { icon: 'Youtube', label: 'YouTube' }
            ].map((social, index) => (
              <Button key={index} variant="ghost" size="sm">
                <Icon name={social.icon as any} size={20} className="mr-2" />
                {social.label}
              </Button>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            © 2025 SAMP Gaming. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;