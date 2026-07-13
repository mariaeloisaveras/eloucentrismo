import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Camera, Check, Compass, Globe2, MapPin, Star, Target, Users, LucideAngularModule, Play, Images, HeartHandshake } from 'lucide-angular';

type IconData = typeof Camera;
type Stat = { value: string; label: string; icon: IconData };
type Card = { title: string; description: string; icon: IconData };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly instagram = '@eloucentrismo';
  readonly email = 'mariaeloisaveras@gmail.com';

  readonly pillars: Card[] = [
    {
      title: 'Exploração real',
      description: 'Vivências autênticas em destinos naturais pelo Brasil e América do Sul.',
      icon: MapPin
    },
    {
      title: 'Natureza & aventura',
      description: 'Montanhas, trilhas e experiências ao ar livre registradas de forma autêntica.',
      icon: Compass
    },
    {
      title: 'Conteúdo que inspira',
      description: 'Uma comunidade conectada pelo desejo de explorar o mundo através da natureza.',
      icon: Target
    }
  ];

  readonly stats: Stat[] = [
    {
      value: '5,5K',
      label: 'Seguidores',
      icon: Users
    },
    {
      value: '5,4%',
      label: 'Taxa de engajamento *',
      icon: HeartHandshake
    },
    {
      value: '239',
      label: 'Conteúdos publicados',
      icon: Camera
    },
    {
      value: '25 • 3',
      label: 'Estados brasileiros • Países explorados',
      icon: MapPin
    }
  ];

  readonly contentFormats: Card[] = [
    {
      title: 'Fotografia autoral',
      description: 'Paisagens, montanhas e destinos naturais registrados com identidade visual própria.',
      icon: Camera
    },
    {
      title: 'Galerias & dumps',
      description: 'Carrosséis e coleções visuais que documentam destinos através de múltiplas perspectivas.',
      icon: Images
    },
    {
      title: 'Reels narrativos',
      description: 'Vídeos curtos que unem storytelling, aventura e experiências reais ao ar livre.',
      icon: Play
    }
  ];

  readonly partnerships: Card[] = [
    {
      title: 'Campanhas patrocinadas',
      description: 'Integração natural de marcas em viagens, trilhas e experiências outdoor.',
      icon: Camera
    },
    {
      title: 'Fotografia & conteúdo visual',
      description: 'Produção autoral de fotos e vídeos para campanhas, redes sociais e lançamentos.',
      icon: Images
    },
    {
      title: 'Produtos em contexto real',
      description: 'Equipamentos testados em experiências reais como trilhas, montanhas e expedições independentes.',
      icon: Check
    },
    {
      title: 'Parcerias de marca',
      description: 'Construção de relacionamento com marcas por meio de conteúdo contínuo e autêntico.',
      icon: Star
    }
  ];

  readonly aboutImage = 'assets/images/about.jpg';
  readonly communityImage = 'assets/images/community.jpg';
  readonly grid1Image = 'assets/images/grid1.jpg';
  readonly grid2Image = 'assets/images/grid2.jpg';
  readonly grid3Image = 'assets/images/grid3.jpg';
  readonly grid4Image = 'assets/images/grid4.jpg';

  readonly gallery = [
    this.grid1Image,
    this.grid2Image,
    this.grid3Image,
    this.grid4Image
  ];
}
