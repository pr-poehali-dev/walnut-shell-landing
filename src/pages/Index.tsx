import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  features: string[];
  applications: string[];
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "", email: "", comment: "" });

  const products: Product[] = [
    {
      id: 1,
      title: "Косметическая крошка",
      description: "Натуральный скраб для косметических средств. Идеально подходит для пилингов и очищающих средств.",
      images: [
        "https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/06781bef-c6c7-4365-94fa-d94333ad6d69.jpg",
        "https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/63439c94-0ee4-4976-8220-87753140a5bc.jpg"
      ],
      features: ["Экологично", "Гипоаллергенно", "Эффективно"],
      applications: ["Косметика", "SPA-процедуры", "Пилинги", "Скрабы"],
      price: 2500
    },
    {
      id: 2,
      title: "Абразивная крошка",
      description: "Промышленный абразив для очистки и полировки. Биоразлагаемая альтернатива синтетическим материалам.",
      images: [
        "https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/6655cee8-99f1-441a-9285-4866aff86a1a.jpg",
        "https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/ccf2e9fa-d46e-4f5b-8995-7be33934ffab.jpg"
      ],
      features: ["Прочность", "Безопасность", "Универсальность"],
      applications: ["Промышленность", "Очистка поверхностей", "Полировка", "Пескоструй"],
      price: 1800
    },
    {
      id: 3,
      title: "Декоративная крошка",
      description: "Натуральный материал для ландшафтного дизайна. Красивое и экологичное решение для дорожек и клумб.",
      images: [
        "https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/fad76b0f-2e3f-4b08-b91c-c7d509817905.jpg",
        "https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/f0ff8ed1-5845-4896-b01d-1bf923efd034.jpg"
      ],
      features: ["Долговечность", "Эстетика", "Натуральность"],
      applications: ["Ландшафтный дизайн", "Дорожки", "Клумбы", "Мульчирование"],
      price: 1200
    }
  ];

  const benefits = [
    {
      icon: "Leaf",
      title: "100% Натурально",
      description: "Изготовлено из скорлупы грецкого ореха без химических добавок"
    },
    {
      icon: "Recycle",
      title: "Экологично",
      description: "Биоразлагаемый материал, не наносящий вред окружающей среде"
    },
    {
      icon: "Award",
      title: "Сертифицировано",
      description: "Соответствует международным стандартам качества"
    },
    {
      icon: "TrendingUp",
      title: "Эффективно",
      description: "Превосходные абразивные свойства для любых задач"
    }
  ];

  const nextImage = (productId: number, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % imagesLength
    }));
  };

  const prevImage = (productId: number, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + imagesLength) % imagesLength
    }));
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleOrderSubmit = () => {
    const orderDetails = cart.map(item => 
      `${item.title} - ${item.quantity} шт. x ${item.price}₽ = ${item.quantity * item.price}₽`
    ).join('\n');
    
    const emailBody = `
Новый заказ с сайта SHELLTECH ABX

Клиент: ${orderForm.name}
Телефон: ${orderForm.phone}
Email: ${orderForm.email}

Заказ:
${orderDetails}

Итого: ${getTotalPrice()}₽

Комментарий: ${orderForm.comment || 'Нет'}
    `;

    window.location.href = `mailto:suprug@tut.by?subject=Заказ с сайта SHELLTECH ABX&body=${encodeURIComponent(emailBody)}`;
    
    setCart([]);
    setOrderForm({ name: "", phone: "", email: "", comment: "" });
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/a8d9bbf1-a117-4e12-8c4d-881dcd579fc2.jpg" 
              alt="ShellTech ABX Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-primary">SHELLTECH ABX</h1>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Продукция</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {cart.length}
                </Badge>
              )}
            </Button>
          </nav>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="bg-[#25D366] hover:bg-[#1FAF54]"
              onClick={() => window.open('https://wa.me/79202957177', '_blank')}
            >
              <Icon name="MessageCircle" size={18} />
            </Button>
            <Button 
              size="sm" 
              className="bg-[#0088cc] hover:bg-[#006699]"
              onClick={() => window.open('https://t.me/79202957177', '_blank')}
            >
              <Icon name="Send" size={18} />
            </Button>
          </div>
        </div>
      </header>

      <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Корзина</DialogTitle>
          </DialogHeader>
          {cart.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 opacity-50" />
              <p>Корзина пуста</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-grow">
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.price}₽ / кг</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="w-12 text-center">{item.quantity} кг</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{item.price * item.quantity}₽</p>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="mt-2 text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="text-right text-xl font-bold border-t pt-4">
                Итого: {getTotalPrice()}₽
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input 
                    id="name" 
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={orderForm.email}
                    onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea 
                    id="comment"
                    value={orderForm.comment}
                    onChange={(e) => setOrderForm({...orderForm, comment: e.target.value})}
                  />
                </div>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleOrderSubmit}
                  disabled={!orderForm.name || !orderForm.phone}
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Отправить заказ на email
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary font-semibold text-sm">
                🌿 Экологичное производство
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Крошка скорлупы грецкого ореха
              </h1>
              <p className="text-xl text-foreground/80 font-medium leading-relaxed">
                Натуральный материал премиум-качества для косметики, промышленности и ландшафтного дизайна. 
                Экологично, безопасно, эффективно.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Download" size={20} className="mr-2" />
                  Прайс-лист
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-foreground/70 font-medium">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-foreground/70 font-medium">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-foreground/70 font-medium">Натурально</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-[100px]"></div>
              <img 
                src="https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/fad76b0f-2e3f-4b08-b91c-c7d509817905.jpg"
                alt="Крошка грецкого ореха"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем натуральные решения высочайшего качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент крошки для различных сфер применения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const currentIndex = currentImageIndex[product.id] || 0;
              return (
                <Card 
                  key={product.id} 
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative overflow-hidden h-80">
                    <img 
                      src={product.images[currentIndex]} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    {product.images.length > 1 && (
                      <>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => prevImage(product.id, product.images.length)}
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => nextImage(product.id, product.images.length)}
                        >
                          <Icon name="ChevronRight" size={20} />
                        </Button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {product.images.map((_, idx) => (
                            <div 
                              key={idx}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                idx === currentIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold">{product.title}</h3>
                      <Badge className="text-lg">{product.price}₽/кг</Badge>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{product.description}</p>
                    
                    <div>
                      <p className="font-semibold mb-2 text-sm">Область применения:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => addToCart(product)}
                    >
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Добавить в корзину
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Готовы начать сотрудничество?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и получите индивидуальное предложение для вашего бизнеса
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => window.location.href = 'mailto:suprug@tut.by'}>
              <Icon name="Mail" size={20} className="mr-2" />
              suprug@tut.by
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = 'tel:+79202957177'}>
              <Icon name="Phone" size={20} className="mr-2" />
              +7 920 295 71 77
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a8d9bbf1-a117-4e12-8c4d-881dcd579fc2.jpg" 
                  alt="ShellTech ABX Logo" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">SHELLTECH ABX</h3>
              </div>
              <p className="text-background/70">
                Производство экологичной крошки из скорлупы грецкого ореха
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/70">
                <p>Email: suprug@tut.by</p>
                <p>Телефон: +7 920 295 71 77</p>
                <p>Адрес: Москва, Россия, Все регионы</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-background/70">
                <a href="#home" className="block hover:text-primary transition-colors">Главная</a>
                <a href="#products" className="block hover:text-primary transition-colors">Продукция</a>
                <a href="#benefits" className="block hover:text-primary transition-colors">Преимущества</a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2024 SHELLTECH ABX. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
