import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      title: "Косметическая крошка",
      description: "Натуральный скраб для косметических средств. Идеально подходит для пилингов и очищающих средств.",
      image: "https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/06781bef-c6c7-4365-94fa-d94333ad6d69.jpg",
      features: ["Экологично", "Гипоаллергенно", "Эффективно"]
    },
    {
      id: 2,
      title: "Абразивная крошка",
      description: "Промышленный абразив для очистки и полировки. Биоразлагаемая альтернатива синтетическим материалам.",
      image: "https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/6655cee8-99f1-441a-9285-4866aff86a1a.jpg",
      features: ["Прочность", "Безопасность", "Универсальность"]
    },
    {
      id: 3,
      title: "Декоративная крошка",
      description: "Натуральный материал для ландшафтного дизайна. Красивое и экологичное решение для дорожек и клумб.",
      image: "https://cdn.poehali.dev/projects/91b490c9-38c2-43c7-8950-eb43a68825a5/files/fad76b0f-2e3f-4b08-b91c-c7d509817905.jpg",
      features: ["Долговечность", "Эстетика", "Натуральность"]
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
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Продукция</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

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
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
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
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 space-y-4 flex flex-col h-[280px]">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-foreground/70 leading-relaxed flex-grow">{product.description}</p>
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
                  <Button className="w-full bg-primary hover:bg-primary/90 group-hover:bg-secondary group-hover:hover:bg-secondary/90 transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
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
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Mail" size={20} className="mr-2" />
              suprug@tut.by
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
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