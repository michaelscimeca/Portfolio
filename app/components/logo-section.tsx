'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function logoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  // Array of logo paths
  const logoFiles = [
    '/logo/rivers-casino.svg',
    '/logo/Wind-Creek-Hospitality.svg',
    '/logo/Cherokee-Casino.svg',
    '/logo/Snickers.svg',
    '/logo/TWIX.svg',
    '/logo/longview.svg',
    '/logo/netherrealm.svg',
    '/logo/Kovitz_Investment.svg'
  ];

  // Logo mapping for each grid position
  const logoMapping = [5, 6, 3, 2, 4, 0, 1, 7]; // indices for the 8 grid positions

  // Logo names for alt text
  const logoNames = [
    'Rivers Casino Logo',
    'Wind Creek Hospitality Logo',
    'Cherokee Casino Logo',
    'Snickers Logo',
    'TWIX Logo',
    'Longview Logo',
    'Nether Realm Logo',
    'Kovitz_Investment.svg'
  ];

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;
    const gridItems = container?.querySelectorAll('.grid-item');
    const firstItem = container?.querySelector('.grid-item');

    // Detect if device is mobile/touch
    const isMobileOrTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    };

    const highlightColors = [
      '#ea6331',
      '#FD6E01',
      '#af1718',
      '#0077B5',
      '#EAAA02',
      '#feb71b',
      '#A32B29',
      '#E03C46',
    ];

    gridItems?.forEach((item, index) => {
      (item as HTMLElement).dataset.color = highlightColors[index % highlightColors.length];
    });

    const moveToElement = (element: HTMLElement) => {
      if (element && highlight && container) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (containerRect) {
          highlight.style.transform = `translate(${rect.left - containerRect.left}px, ${rect.top - containerRect.top}px)`;
          highlight.style.width = `${rect.width}px`;
          highlight.style.height = `${rect.height}px`;
          highlight.style.backgroundColor = element.dataset.color as string;
        }
      }
    };

    const moveHighlight = (e: MouseEvent) => {
      const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoverElement && hoverElement.classList.contains('grid-item')) {
        moveToElement(hoverElement as HTMLElement);
      } else if (hoverElement && hoverElement.parentElement && hoverElement.parentElement.classList.contains('grid-item')) {
        moveToElement(hoverElement.parentElement as HTMLElement);
      }
    };

    let cleanup: (() => void) | undefined;

    // Only enable hover effects on desktop (non-touch devices)
    if (!isMobileOrTouch()) {
      // Initialize highlight position on first item
      if (firstItem && highlight && container) {
        moveToElement(firstItem as HTMLElement);
      }

      // Add mousemove listener to container for smooth tracking
      const handleMouseMove = (e: MouseEvent) => moveHighlight(e);
      container?.addEventListener('mousemove', handleMouseMove);

      // Show highlight element
      if (highlight) {
        highlight.style.display = 'block';
      }

      // Set cleanup function for desktop listeners
      cleanup = () => {
        container?.removeEventListener('mousemove', handleMouseMove);
      };
    } else {
      // Mobile: Apply colors directly to grid items
      gridItems?.forEach((item, index) => {
        const gridItem = item as HTMLElement;
        const colorIndex = index % highlightColors.length;
        gridItem.style.backgroundColor = highlightColors[colorIndex];
        gridItem.classList.add('mobile-colored');
      });

      // Completely disable highlight element on mobile
      if (highlight) {
        highlight.style.display = 'none';
        highlight.style.visibility = 'hidden';
        highlight.style.opacity = '0';
        highlight.style.pointerEvents = 'none';
        highlight.style.zIndex = '-1';
      }
      
      // Set cleanup function for mobile styles
      cleanup = () => {
        gridItems?.forEach((item) => {
          const gridItem = item as HTMLElement;
          gridItem.style.backgroundColor = '';
          gridItem.classList.remove('mobile-colored');
        });
        // Reset highlight if switching back to desktop
        if (highlight) {
          highlight.style.display = '';
          highlight.style.visibility = '';
          highlight.style.opacity = '';
          highlight.style.pointerEvents = '';
          highlight.style.zIndex = '';
        }
      };
    }

    // Return cleanup function
    return cleanup;
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="highlight" ref={highlightRef}></div>
      <div className="grid">
        <div className="grid-row">
          <div className="grid-item">
            <div className="slide-image">
              <span className="image-wrap">
                {/* FRONT image (visible initially) */}
                <Image
                  src={logoFiles[logoMapping[0]]}
                  alt={logoNames[logoMapping[0]]}
                  width={200}
                  height={70}
                />

                {/* BACK image (slides up on hover) */}
                <Image
                  src={logoFiles[logoMapping[0]]}
                  alt={logoNames[logoMapping[0]]}
                  width={200}
                  height={60}
                />
              </span>
            </div>
          </div>
          <div className="grid-item">
            <div className="slide-image">
              <span className="image-wrap">
                {/* FRONT image (visible initially) */}
                <Image
                  src={logoFiles[logoMapping[1]]}
                  alt={logoNames[logoMapping[1]]}
                  width={160}
                  height={60}
                />

                {/* BACK image (slides up on hover) */}
                <Image
                  src={logoFiles[logoMapping[1]]}
                  alt={logoNames[logoMapping[1]]}
                  width={180}
                  height={60}
                />
              </span>
            </div>
          </div>
          <div className="grid-item">
            <div className="slide-image">
              <span className="image-wrap">
                {/* FRONT image (visible initially) */}
                <Image
                  src={logoFiles[logoMapping[2]]}
                  alt={logoNames[logoMapping[2]]}
                  width={160}
                  height={60}
                />

                {/* BACK image (slides up on hover) */}
                <Image
                  src={logoFiles[logoMapping[2]]}
                  alt={logoNames[logoMapping[2]]}
                  width={160}
                  height={60}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item">
            <div className="slide-image">
              <span className="image-wrap">
                {/* FRONT image (visible initially) */}
                <Image
                  src={logoFiles[logoMapping[4]]}
                  alt={logoNames[logoMapping[4]]}
                  width={85}
                  height={60}
                />

                {/* BACK image (slides up on hover) */}
                <Image
                  src={logoFiles[logoMapping[4]]}
                  alt={logoNames[logoMapping[4]]}
                  width={85}
                  height={60}
                />
              </span>
            </div>
          </div>
          <div className="grid-item">
            <div className="slide-image">
              <span className="image-wrap">
                {/* FRONT image (visible initially) */}
                <Image
                  src={logoFiles[logoMapping[5]]}
                  alt={logoNames[logoMapping[5]]}
                  width={70}
                  height={60}
                />

                {/* BACK image (slides up on hover) */}
                <Image
                  src={logoFiles[logoMapping[5]]}
                  alt={logoNames[logoMapping[5]]}
                  width={70}
                  height={60}
                />
              </span>
            </div>
          </div>
          <div className="grid-item">
            <div className="slide-image">
              <span className="image-wrap">
                {/* FRONT image (visible initially) */}
                <Image
                  src={logoFiles[logoMapping[6]]}
                  alt={logoNames[logoMapping[6]]}
                  width={95}
                  height={60}
                />

                {/* BACK image (slides up on hover) */}
                <Image
                  src={logoFiles[logoMapping[6]]}
                  alt={logoNames[logoMapping[6]]}
                  width={95}
                  height={60}
                />
              </span>
            </div>
          </div>
          <div className="grid-item">
            <div className="slide-image">
              <span className="image-wrap">
                {/* FRONT image (visible initially) */}
                <Image
                  src={logoFiles[logoMapping[7]]}
                  alt={logoNames[logoMapping[7]]}
                  width={120}
                  height={60}
                />

                {/* BACK image (slides up on hover) */}
                <Image
                  src={logoFiles[logoMapping[7]]}
                  alt={logoNames[logoMapping[7]]}
                  width={120}
                  height={60}
                />
              </span>
            </div>
          </div>
          <div className="grid-item">
            <div className="slide-image">
              <span className="image-wrap">
                {/* FRONT image (visible initially) */}
                <Image
                  src={logoFiles[logoMapping[3]]}
                  alt={logoNames[logoMapping[3]]}
                  width={80}
                  height={60}
                />

                {/* BACK image (slides up on hover) */}
                <Image
                  src={logoFiles[logoMapping[3]]}
                  alt={logoNames[logoMapping[3]]}
                  width={80}
                  height={60}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


