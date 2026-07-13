import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Instagram, LucideAngularModule, Mail, MapPin } from 'lucide-angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled: HTMLElement;

  const textOf = (selector: string): string =>
    compiled.querySelector(selector)?.textContent?.replace(/\s+/g, ' ').trim() ?? '';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        LucideAngularModule.pick({ Instagram, Mail, MapPin })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the media kit page', () => {
    expect(component).toBeTruthy();
  });

  it('should expose configured content collections', () => {
    expect(component.instagram).toBe('@eloucentrismo');
    expect(component.email).toBe('mariaeloisaveras@gmail.com');
    expect(component.pillars.map((item) => item.title)).toEqual([
      'Exploração real',
      'Natureza & aventura',
      'Conteúdo que inspira'
    ]);
    expect(component.stats.map((stat) => stat.value)).toEqual([
      '5,4K+',
      '1,04%',
      '239',
      '25 • 3'
    ]);
    expect(component.contentFormats.map((item) => item.title)).toEqual([
      'Fotografia autoral',
      'Galerias & dumps',
      'Reels narrativos'
    ]);
    expect(component.partnerships.length).toBe(4);
    expect(component.gallery).toEqual([
      'assets/images/grid1.jpg',
      'assets/images/grid2.jpg',
      'assets/images/grid3.jpg',
      'assets/images/grid4.jpg'
    ]);
  });

  it('should render the hero and main navigation links', () => {
    const navLinks = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('nav a'));

    expect(textOf('#hero h1')).toBe('Registrando caminhos');
    expect(navLinks.map((link) => link.textContent?.trim())).toEqual([
      'Sobre',
      'Alcance',
      'Comunidade',
      'Parcerias',
      'Contato'
    ]);
    expect(navLinks.map((link) => link.getAttribute('href'))).toEqual([
      '#sobre',
      '#alcance',
      '#comunidade',
      '#parcerias',
      '#contato'
    ]);
  });

  it('should render all data-driven cards from the component content', () => {
    const pillarCards = Array.from(compiled.querySelectorAll('#sobre .card'));
    const statCards = Array.from(compiled.querySelectorAll('.stat-card'));
    const partnershipCards = Array.from(compiled.querySelectorAll('#parcerias .card'));

    expect(pillarCards.length).toBe(component.pillars.length);
    component.pillars.forEach((pillar, index) => {
      expect(pillarCards[index].textContent).toContain(pillar.title);
      expect(pillarCards[index].textContent).toContain(pillar.description);
    });

    expect(statCards.length).toBe(component.stats.length);
    component.stats.forEach((stat, index) => {
      expect(statCards[index].textContent).toContain(stat.value);
      expect(statCards[index].textContent).toContain(stat.label);
    });

    expect(partnershipCards.length).toBe(component.partnerships.length);
    component.partnerships.forEach((partnership, index) => {
      expect(partnershipCards[index].textContent).toContain(partnership.title);
      expect(partnershipCards[index].textContent).toContain(partnership.description);
    });
  });

  it('should render profile images and gallery images with configured sources', () => {
    const aboutImage = compiled.querySelector<HTMLImageElement>('#sobre .side-photo');
    const communityImage = compiled.querySelector<HTMLImageElement>('#comunidade .side-photo');
    const galleryImages = Array.from(compiled.querySelectorAll<HTMLImageElement>('.gallery img'));

    expect(aboutImage?.getAttribute('src')).toBe(component.aboutImage);
    expect(aboutImage?.getAttribute('alt')).toBe('Pessoa na montanha sorrindo com por do sol ao fundo');
    expect(communityImage?.getAttribute('src')).toBe(component.communityImage);
    expect(communityImage?.getAttribute('alt')).toBe('Pessoa fazendo trilha com montanha de fundo');
    expect(galleryImages.length).toBe(component.gallery.length);
    galleryImages.forEach((image, index) => {
      expect(image.getAttribute('src')).toBe(component.gallery[index]);
      expect(image.getAttribute('alt')).toBe('Foto de viagem, trilha ou paisagem natural');
    });
  });

  it('should render partnership proof and contact links', () => {
    const partnershipProof = compiled.querySelector('.partner-proof');
    const instagramLink = compiled.querySelector<HTMLAnchorElement>(
      '.contact-card a[href="https://instagram.com/eloucentrismo"]'
    );
    const emailLink = compiled.querySelector<HTMLAnchorElement>(
      `.contact-card a[href="mailto:${component.email}"]`
    );
    const ctaLink = compiled.querySelector<HTMLAnchorElement>(
      `.contact-card a[href="mailto:${component.email}?subject=Parceria%20-%20Eloucentrismo"]`
    );

    expect(partnershipProof?.textContent).toContain('Nos Alpes • parceria ativa');
    expect(partnershipProof?.textContent).toContain('Worldpackers • colaboração anterior');
    expect(textOf('#contato .section-subtitle')).toBe(
      'Tem uma campanha, lançamento ou projeto em mente? Vamos conversar.'
    );
    expect(instagramLink?.textContent).toContain(component.instagram);
    expect(instagramLink?.target).toBe('_blank');
    expect(emailLink?.textContent).toContain(component.email);
    expect(ctaLink?.textContent?.trim()).toBe('Vamos conversar');
  });

  it('should render the requested footer text', () => {
    expect(textOf('.footer')).toBe(
      '© 2026 @eloucentrismo • Design e desenvolvimento por Maria Eloisa Véras'
    );
  });
});
