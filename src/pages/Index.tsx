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
              Поддержи проект
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'Базовый',
                  price: '199₽',
                  features: ['Особый ник', 'Доступ к VIP зонам', '50% бонус к опыту'],
                  popular: false
                },
                {
                  name: 'Премиум',
                  price: '399₽',
                  features: ['Все из базового', 'Эксклюзивные скины', 'Приоритет в очереди', 'Особые команды'],
                  popular: true
                },
                {
                  name: 'Элитный',
                  price: '799₽',
                  features: ['Все из премиума', 'Собственный дом', 'Эксклюзивные авто', 'Админ панель'],
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`relative overflow-hidden group hover:scale-105 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-gaming-orange/20 to-gaming-cyan/20 border-gaming-orange shadow-lg shadow-gaming-orange/25' 
                    : 'bg-gradient-to-b from-card/80 to-card hover:from-gaming-blue/10 hover:to-gaming-cyan/10 border-border/50 hover:border-gaming-cyan/50'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gaming-electric/5 to-transparent" />
                  
                  {plan.popular && (
                    <>
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gaming-orange text-white font-bold px-4 py-1 shadow-lg">
                        ⭐ Популярный
                      </Badge>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gaming-orange/20 rounded-full animate-pulse" />
                    </>
                  )}
                  
                  <CardHeader className="text-center relative z-10 pb-4">
                    <div className="mb-4">
                      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                        plan.popular 
                          ? 'bg-gaming-orange/30 border-2 border-gaming-orange' 
                          : 'bg-gaming-cyan/20 border-2 border-gaming-cyan/50'
                      }`}>
                        <Icon 
                          name={plan.popular ? "Crown" : index === 0 ? "Star" : "Gem"} 
                          size={28} 
                          className={plan.popular ? "text-gaming-orange" : "text-gaming-cyan"} 
                        />
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-gaming-orange' : 'text-gaming-cyan'}`}>
                      {plan.price}
                    </div>
                    <p className="text-xs text-muted-foreground">на месяц</p>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-card/30">
                          <div className={`p-1 rounded-full ${plan.popular ? 'bg-gaming-orange/20' : 'bg-gaming-cyan/20'}`}>
                            <Icon 
                              name="Check" 
                              size={14} 
                              className={plan.popular ? "text-gaming-orange" : "text-gaming-cyan"} 
                            />
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full relative overflow-hidden font-bold text-white shadow-lg transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-gaming-orange to-gaming-orange/80 hover:from-gaming-orange/90 hover:to-gaming-orange hover:shadow-gaming-orange/50' 
                          : 'bg-gradient-to-r from-gaming-cyan to-gaming-blue hover:from-gaming-cyan/90 hover:to-gaming-blue/90 hover:shadow-gaming-cyan/30'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Icon name="ShoppingCart" size={18} />
                        Приобрести
                      </span>
                      <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
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