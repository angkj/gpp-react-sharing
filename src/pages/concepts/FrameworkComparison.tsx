import ReactLogo from '../../assets/react.svg';

// Framework Logo Components
const VueLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 20h18L12 2z" fill="#4FC08D"/>
    <path d="M12 2L7.5 11h9L12 2z" fill="#35495E"/>
  </svg>
);

const AngularLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7l1.5 13L12 22l7.5-2L21 7l-9-5z" fill="#DD0031"/>
    <path d="M12 2v20l7.5-2L21 7l-9-5z" fill="#C3002F"/>
    <path d="M12 5.5L8.5 15h1.75L11 12h2l.75 3h1.75L12 5.5z" fill="white"/>
  </svg>
);

const SvelteLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20.5 8.5c-1.5-3-5-4.5-8.5-3.5s-6 4-6 7.5 2.5 6.5 6 7.5 7-1 8.5-4" 
          stroke="#FF3E00" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="#FF3E00"/>
  </svg>
);

const ReactLogoComponent = () => (
  <img src={ReactLogo} alt="React" width="24" height="24" />
);

const FrameworkComparison = () => {
  const frameworks = [
    {
      name: 'React',
      logo: <ReactLogoComponent />,
      type: 'Library',
      creator: 'Facebook (Meta)',
      year: '2013',
      language: 'JavaScript/TypeScript',
      architecture: 'Component-based',
      virtualDOM: 'Yes',
      learningCurve: 'Moderate',
      ecosystem: 'Massive',
      strengths: [
        'Huge ecosystem and community',
        'Flexible and unopinionated',
        'Strong job market',
        'Excellent developer tools',
        'Backed by Meta'
      ],
      weaknesses: [
        'Steep learning curve for beginners',
        'Requires additional libraries for full functionality',
        'Frequent updates can break compatibility',
        'JSX syntax learning required'
      ],
      bestFor: 'Large-scale applications, SPAs, when you need maximum flexibility'
    },
    {
      name: 'Angular',
      logo: <AngularLogo />,
      type: 'Framework',
      creator: 'Google',
      year: '2016',
      language: 'TypeScript',
      architecture: 'Component-based with MVC',
      virtualDOM: 'No (uses real DOM)',
      learningCurve: 'Steep',
      ecosystem: 'Comprehensive',
      strengths: [
        'Full-featured framework out of the box',
        'Strong TypeScript integration',
        'Excellent for enterprise applications',
        'Powerful CLI and tooling',
        'Two-way data binding'
      ],
      weaknesses: [
        'Very steep learning curve',
        'Heavy and complex',
        'Frequent major version updates',
        'Overkill for simple projects'
      ],
      bestFor: 'Enterprise applications, large teams, when you need everything included'
    }
  ];

  const comparisonMetrics = [
    {
      metric: 'Bundle Size',
      react: 'Medium (~42KB)',
      angular: 'Large (~130KB)',
      vue: 'Small (~34KB)',
      svelte: 'Tiny (~10KB)'
    },
    {
      metric: 'Performance',
      react: 'Good',
      angular: 'Good',
      vue: 'Excellent',
      svelte: 'Excellent'
    },
    {
      metric: 'Learning Curve',
      react: 'Moderate',
      angular: 'Steep',
      vue: 'Easy',
      svelte: 'Easy'
    },
    {
      metric: 'Job Market',
      react: 'Excellent',
      angular: 'Good',
      vue: 'Fair',
      svelte: 'Limited'
    },
    {
      metric: 'Community',
      react: 'Huge',
      angular: 'Large',
      vue: 'Medium',
      svelte: 'Small'
    },
    {
      metric: 'Ecosystem',
      react: 'Massive',
      angular: 'Comprehensive',
      vue: 'Growing',
      svelte: 'Limited'
    }
  ];

  const getMetricColor = (value: string) => {
    const colorMap: { [key: string]: string } = {
      'Excellent': '#4CAF50',
      'Good': '#8BC34A',
      'Fair': '#FFC107',
      'Limited': '#FF9800',
      'Huge': '#4CAF50',
      'Large': '#8BC34A',
      'Medium': '#FFC107',
      'Small': '#FF9800',
      'Tiny': '#4CAF50',
      'Massive': '#4CAF50',
      'Comprehensive': '#8BC34A',
      'Growing': '#FFC107',
      'Easy': '#4CAF50',
      'Moderate': '#FFC107',
      'Steep': '#FF9800'
    };
    return colorMap[value] || '#9E9E9E';
  };

  return (
    <div style={{ 
      maxWidth: '1200px',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
        <h1 style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: '700',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-lg)',
          letterSpacing: '-0.5px'
        }}>
          Framework Comparison
        </h1>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--apple-text-secondary)',
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          Compare React with other popular frontend frameworks and libraries
        </p>
      </div>

      {/* Quick Comparison Table */}
      <div style={{
        padding: 'var(--spacing-2xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        marginBottom: 'var(--spacing-2xl)',
        overflowX: 'auto'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          Quick Comparison
        </h2>
        
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: 'var(--font-size-sm)'
        }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--apple-separator)' }}>
              <th style={{
                padding: 'var(--spacing-md)',
                textAlign: 'left',
                fontWeight: '600',
                color: 'var(--apple-text-primary)'
              }}>
                Metric
              </th>
              <th style={{
                padding: 'var(--spacing-md)',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--apple-text-primary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <ReactLogoComponent /> React
                </div>
              </th>
              <th style={{
                padding: 'var(--spacing-md)',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--apple-text-primary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <AngularLogo /> Angular
                </div>
              </th>
              <th style={{
                padding: 'var(--spacing-md)',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--apple-text-primary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <VueLogo /> Vue
                </div>
              </th>
              <th style={{
                padding: 'var(--spacing-md)',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--apple-text-primary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <SvelteLogo /> Svelte
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonMetrics.map((row, index) => (
              <tr key={index} style={{
                borderBottom: '1px solid var(--apple-separator)',
                backgroundColor: index % 2 === 0 ? 'transparent' : 'var(--apple-gray-1)'
              }}>
                <td style={{
                  padding: 'var(--spacing-md)',
                  fontWeight: '500',
                  color: 'var(--apple-text-primary)'
                }}>
                  {row.metric}
                </td>
                <td style={{
                  padding: 'var(--spacing-md)',
                  textAlign: 'center'
                }}>
                  <span style={{
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: getMetricColor(row.react),
                    color: 'white',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '500'
                  }}>
                    {row.react}
                  </span>
                </td>
                <td style={{
                  padding: 'var(--spacing-md)',
                  textAlign: 'center'
                }}>
                  <span style={{
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: getMetricColor(row.angular),
                    color: 'white',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '500'
                  }}>
                    {row.angular}
                  </span>
                </td>
                <td style={{
                  padding: 'var(--spacing-md)',
                  textAlign: 'center'
                }}>
                  <span style={{
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: getMetricColor(row.vue),
                    color: 'white',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '500'
                  }}>
                    {row.vue}
                  </span>
                </td>
                <td style={{
                  padding: 'var(--spacing-md)',
                  textAlign: 'center'
                }}>
                  <span style={{
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: getMetricColor(row.svelte),
                    color: 'white',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '500'
                  }}>
                    {row.svelte}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Framework Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-2xl)'
      }}>
        {frameworks.map((framework) => (
          <div 
            key={framework.name}
            style={{
              padding: 'var(--spacing-2xl)',
              backgroundColor: 'var(--apple-background)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--apple-separator)',
              boxShadow: '0 4px 16px var(--apple-shadow)',
              transition: 'var(--transition-base)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <div style={{ fontSize: '2rem', display: 'flex', alignItems: 'center' }}>{framework.logo}</div>
              <div>
                <h3 style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: '700',
                  color: 'var(--apple-text-primary)',
                  margin: 0
                }}>
                  {framework.name}
                </h3>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--apple-text-secondary)',
                  margin: 0
                }}>
                  {framework.type} • {framework.creator} • {framework.year}
                </p>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <div>
                <strong style={{ color: 'var(--apple-text-primary)' }}>Language:</strong>
                <p style={{ margin: '4px 0', color: 'var(--apple-text-secondary)' }}>
                  {framework.language}
                </p>
              </div>
              <div>
                <strong style={{ color: 'var(--apple-text-primary)' }}>Architecture:</strong>
                <p style={{ margin: '4px 0', color: 'var(--apple-text-secondary)' }}>
                  {framework.architecture}
                </p>
              </div>
              <div>
                <strong style={{ color: 'var(--apple-text-primary)' }}>Virtual DOM:</strong>
                <p style={{ margin: '4px 0', color: 'var(--apple-text-secondary)' }}>
                  {framework.virtualDOM}
                </p>
              </div>
              <div>
                <strong style={{ color: 'var(--apple-text-primary)' }}>Learning Curve:</strong>
                <p style={{ margin: '4px 0', color: 'var(--apple-text-secondary)' }}>
                  {framework.learningCurve}
                </p>
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <h4 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                color: 'var(--apple-text-primary)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                ✅ Strengths
              </h4>
              <ul style={{
                margin: 0,
                paddingLeft: 'var(--spacing-lg)',
                color: 'var(--apple-text-secondary)'
              }}>
                {framework.strengths.map((strength, i) => (
                  <li key={i} style={{ marginBottom: 'var(--spacing-xs)' }}>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <h4 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                color: 'var(--apple-text-primary)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                ⚠️ Weaknesses
              </h4>
              <ul style={{
                margin: 0,
                paddingLeft: 'var(--spacing-lg)',
                color: 'var(--apple-text-secondary)'
              }}>
                {framework.weaknesses.map((weakness, i) => (
                  <li key={i} style={{ marginBottom: 'var(--spacing-xs)' }}>
                    {weakness}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--apple-gray-1)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--apple-blue)'
            }}>
              <strong style={{ color: 'var(--apple-text-primary)' }}>Best For:</strong>
              <p style={{
                margin: '4px 0 0 0',
                color: 'var(--apple-text-secondary)',
                fontSize: 'var(--font-size-sm)'
              }}>
                {framework.bestFor}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decision Guide */}
      <div style={{
        padding: 'var(--spacing-2xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          🤔 Which Framework Should You Choose?
        </h2>
        
        <div style={{
          display: 'grid',
          gap: 'var(--spacing-lg)'
        }}>
          {[
            {
              scenario: 'You\'re new to frontend frameworks',
              recommendation: 'Vue.js',
              reason: 'Gentle learning curve, excellent documentation, and template syntax similar to HTML'
            },
            {
              scenario: 'You want maximum job opportunities',
              recommendation: 'React',
              reason: 'Largest job market, huge community, and widely adopted by companies'
            },
            {
              scenario: 'You\'re building a large enterprise application',
              recommendation: 'Angular',
              reason: 'Full-featured framework with everything included, strong TypeScript support'
            },
            {
              scenario: 'Performance and bundle size are critical',
              recommendation: 'Svelte',
              reason: 'No virtual DOM overhead, compiles to vanilla JS, smallest bundle sizes'
            },
            {
              scenario: 'You need maximum flexibility and ecosystem',
              recommendation: 'React',
              reason: 'Unopinionated library with massive ecosystem and community support'
            },
            {
              scenario: 'You want rapid prototyping',
              recommendation: 'Vue.js',
              reason: 'Quick to learn, great developer experience, and progressive adoption'
            }
          ].map((guide, index) => (
            <div 
              key={index}
              style={{
                padding: 'var(--spacing-lg)',
                backgroundColor: 'var(--apple-gray-1)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--apple-gray-2)'
              }}
            >
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                color: 'var(--apple-text-primary)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                {guide.scenario}
              </h3>
              <p style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--apple-text-secondary)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                <strong style={{ color: 'var(--apple-blue)' }}>
                  Recommended: {guide.recommendation}
                </strong>
              </p>
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--apple-text-secondary)',
                margin: 0
              }}>
                {guide.reason}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--apple-blue)',
          borderRadius: 'var(--radius-md)',
          color: 'white'
        }}>
          <p style={{
            fontSize: 'var(--font-size-base)',
            fontWeight: '500',
            margin: 0,
            textAlign: 'center'
          }}>
            💡 <strong>Remember:</strong> The "best" framework depends on your specific needs, team expertise, and project requirements. All of these frameworks can build excellent applications!
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FrameworkComparison;
