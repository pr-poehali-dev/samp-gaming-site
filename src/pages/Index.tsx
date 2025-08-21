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
              Автодонат
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Привилегии */}
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="Crown" size={20} className="text-gaming-orange" />
                    Привилегии
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'VIP', price: '299₽', duration: '30 дней', popular: false },
                      { name: 'Premium', price: '599₽', duration: '30 дней', popular: true },
                      { name: 'Deluxe', price: '999₽', duration: '30 дней', popular: false },
                      { name: 'Ultimate', price: '1999₽', duration: '30 дней', popular: false }
                    ].map((privilege, index) => (
                      <Card key={index} className={`cursor-pointer transition-all hover:scale-105 ${
                        privilege.popular ? 'border-gaming-orange bg-gaming-orange/5' : 'border-border/50 hover:border-gaming-cyan/50'
                      }`}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold">{privilege.name}</h4>
                                {privilege.popular && <Badge className="bg-gaming-orange text-xs">ТОП</Badge>}
                              </div>
                              <p className="text-xs text-muted-foreground">{privilege.duration}</p>
                            </div>
                            <div className="text-gaming-cyan font-bold">{privilege.price}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Игровые предметы */}
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="Package" size={20} className="text-gaming-cyan" />
                    Предметы
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Алмазный меч', price: '150₽', icon: 'Sword' },
                      { name: 'Зелье силы x10', price: '89₽', icon: 'Flask' },
                      { name: 'Редкий блок x64', price: '199₽', icon: 'Box' },
                      { name: 'Энчант книга', price: '250₽', icon: 'Book' },
                      { name: 'Летающий ковер', price: '399₽', icon: 'Plane' },
                      { name: 'Магический кристалл', price: '299₽', icon: 'Gem' }
                    ].map((item, index) => (
                      <Card key={index} className="cursor-pointer transition-all hover:scale-105 border-border/50 hover:border-gaming-cyan/50">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gaming-cyan/20 rounded-lg flex items-center justify-center">
                                <Icon name={item.icon as any} size={16} className="text-gaming-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium text-sm">{item.name}</h4>
                              </div>
                            </div>
                            <div className="text-gaming-cyan font-bold text-sm">{item.price}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Форма заказа */}
                <div>
                  <Card className="sticky top-4 border-gaming-electric/30 bg-gradient-to-b from-card/80 to-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="ShoppingCart" size={20} className="text-gaming-orange" />
                        Оформить заказ
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Ник игрока */}
                      <div>
                        <label className="block text-sm font-medium mb-2">Ник в игре</label>
                        <input 
                          type="text" 
                          placeholder="Введите ваш ник"
                          className="w-full px-3 py-2 bg-card border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaming-cyan focus:border-transparent text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input 
                          type="email" 
                          placeholder="your@email.com"
                          className="w-full px-3 py-2 bg-card border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaming-cyan focus:border-transparent text-sm"
                        />
                      </div>

                      {/* Промокод */}
                      <div>
                        <label className="block text-sm font-medium mb-2">Промокод</label>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="СКИДКА10"
                            className="flex-1 px-3 py-2 bg-card border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaming-cyan focus:border-transparent text-sm"
                          />
                          <Button size="sm" variant="outline" className="border-gaming-cyan/50 text-gaming-cyan hover:bg-gaming-cyan/10">
                            <Icon name="Check" size={14} />
                          </Button>
                        </div>
                      </div>

                      {/* Итого */}
                      <div className="bg-gaming-blue/10 border border-gaming-blue/30 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Выбрано товаров:</span>
                          <span className="text-sm font-medium">0</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Скидка:</span>
                          <span className="text-sm text-gaming-orange">-0₽</span>
                        </div>
                        <hr className="border-border/30 my-2" />
                        <div className="flex justify-between items-center">
                          <span className="font-bold">Итого:</span>
                          <span className="font-bold text-gaming-cyan text-lg">0₽</span>
                        </div>
                      </div>

                      {/* Способы оплаты */}
                      <div>
                        <label className="block text-sm font-medium mb-3">Способ оплаты</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { name: 'Карта', icon: 'CreditCard' },
                            { name: 'QIWI', icon: 'Wallet' },
                            { name: 'Steam', icon: 'Gamepad2' },
                            { name: 'Crypto', icon: 'Bitcoin' }
                          ].map((method, index) => (
                            <button key={index} className="p-3 bg-gaming-cyan/10 border border-gaming-cyan/30 rounded-lg hover:bg-gaming-cyan/20 transition-colors flex flex-col items-center gap-1">
                              <Icon name={method.icon as any} size={16} className="text-gaming-cyan" />
                              <span className="text-xs font-medium">{method.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-gaming-orange to-gaming-orange/80 hover:from-gaming-orange/90 hover:to-gaming-orange text-white font-bold py-3 shadow-lg hover:shadow-gaming-orange/30 transition-all">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Оплатить
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        После оплаты товары будут автоматически выданы в течение 5 минут
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="forum" className="py-20 bg-card/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gaming-blue to-gaming-cyan bg-clip-text text-transparent">
              Форум
            </h2>
            <Tabs defaultValue="discussions" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="discussions">Обсуждения</TabsTrigger>
                <TabsTrigger value="guides">Гайды</TabsTrigger>
                <TabsTrigger value="bugs">Баги</TabsTrigger>
              </TabsList>
              
              <TabsContent value="discussions" className="space-y-4">
                {[
                  { title: 'Новое обновление сервера', author: 'Admin', replies: 15, time: '2 часа назад' },
                  { title: 'Обсуждение новых правил', author: 'Moderator', replies: 8, time: '5 часов назад' },
                  { title: 'Предложения по улучшению', author: 'Player123', replies: 23, time: '1 день назад' }
                ].map((topic, index) => (
                  <Card key={index} className="hover:bg-accent/50 transition-colors cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{topic.title}</h3>
                          <p className="text-sm text-muted-foreground">от {topic.author}</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div>{topic.replies} ответов</div>
                          <div>{topic.time}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="guides" className="text-center py-8">
                <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-gaming-cyan" />
                <p className="text-muted-foreground">Раздел с гайдами скоро появится</p>
              </TabsContent>
              
              <TabsContent value="bugs" className="text-center py-8">
                <Icon name="Bug" size={48} className="mx-auto mb-4 text-gaming-orange" />
                <p className="text-muted-foreground">Раздел с багами скоро появится</p>
              </TabsContent>
            </Tabs>
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