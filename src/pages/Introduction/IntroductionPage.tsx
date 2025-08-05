import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  IconButton,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Stack,
  useTheme,
  alpha
} from '@mui/material';
import {
  TrendingUp,
  AutoAwesome,
  Security,
  Analytics,
  Factory,
  Business,
  AdminPanelSettings,
  LaunchOutlined,
  CheckCircleOutline,
  Timeline,
  EmojiEvents,
  AttachMoney,
  PlayArrow,
  Insights,
  WorkspacePremium
} from '@mui/icons-material';

const IntroductionPage: React.FC = () => {
  const theme = useTheme();
  
  const handleDemoLaunch = () => {
    window.open('/dashboard', '_blank');
  };

  const features = [
    {
      icon: <TrendingUp />,
      title: '실시간 탄소배출 모니터링',
      description: '중부발전 발전소별 실시간 배출량 및 24시간 탄소집약도 예측'
    },
    {
      icon: <AutoAwesome />,
      title: 'AI 기반 자동매칭',
      description: 'RE100 기업의 탄소상쇄 요구사항과 청정전력 공급시간 자동 매칭'
    },
    {
      icon: <Security />,
      title: '블록체인 인증서',
      description: '탄소상쇄 거래 인증서 실시간 발급 및 QR코드 검증 시스템'
    },
    {
      icon: <Analytics />,
      title: '성과 분석 대시보드',
      description: '월별 탄소상쇄량, 비용 절감 효과, 파트너 기업 관리'
    }
  ];

  const scenarios = [
    {
      icon: <Factory />,
      title: '중부발전 발전소 관리자',
      items: [
        '실시간 탄소배출량 모니터링 (석탄발전 비중 최적화)',
        '24시간 탄소집약도 예측으로 청정전력 시간대 식별',
        '암모니아·바이오매스 혼소 최적 배합 알고리즘 활용'
      ]
    },
    {
      icon: <Business />,
      title: 'RE100 기업 ESG 담당자',
      items: [
        '탄소상쇄 목표 설정 (연간 500만톤 CO2 상쇄)',
        '자동매칭을 통한 중부발전 청정전력 확보',
        '블록체인 인증서 발급으로 ESG 공시 대응'
      ]
    },
    {
      icon: <AdminPanelSettings />,
      title: '중부발전 플랫폼 관리자',
      items: [
        '전체 탄소거래 현황 모니터링 (연간 5,000억원 규모)',
        '탄소배출 20% 감축 성과 분석 (1,000만톤 → 800만톤)',
        '300개 참여 기업 관리 및 수수료 수익 창출'
      ]
    }
  ];

  const quantitativeEffects = [
    '연간 거래 중개 수수료: 100억원',
    '중부발전 탄소배출 20% 감축: 1,000만톤 → 800만톤 CO2',
    '참여 기업 탄소중립: 300개 기업의 연간 500만톤 CO2 상쇄',
    '재생에너지 활용률 30% 향상',
    '일자리 창출: 200명'
  ];

  const qualitativeEffects = [
    '탄소중립 리더십 확립: 6개 발전사 중 탄소거래 선도 기업 도약',
    'ESG 경영 고도화: 환경(E) 분야 국내 최고 수준 달성',
    '미래 성장동력 확보: 기존 발전사업을 넘어선 플랫폼 기업 전환'
  ];

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)' }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* 히어로 섹션 */}
        <Box 
          textAlign="center" 
          mb={8}
          sx={{
            background: 'linear-gradient(135deg, rgba(0, 200, 81, 0.05) 0%, rgba(0, 188, 212, 0.05) 100%)',
            borderRadius: 4,
            p: 6,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
              animation: 'shimmer 3s infinite',
            },
            '@keyframes shimmer': {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(100%)' }
            }
          }}
        >
          <Chip 
            label="🏆 2025 KOMIPO 「혁신 50대 과제」 아이디어 공모전 제출용" 
            color="primary" 
            sx={{ 
              mb: 3, 
              fontSize: '1rem', 
              fontWeight: 700,
              py: 3,
              px: 2,
              background: 'linear-gradient(135deg, #00C851 0%, #00BCD4 100%)',
              color: 'white',
              '& .MuiChip-label': {
                px: 2
              }
            }}
          />
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 800, 
              background: 'linear-gradient(135deg, #00C851 0%, #00BCD4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2
            }}
          >
            CarbonZero Platform
          </Typography>
          <Typography 
            variant="h4" 
            color="text.secondary" 
            gutterBottom
            sx={{ 
              fontWeight: 500,
              fontSize: { xs: '1.25rem', md: '1.75rem' },
              mb: 4
            }}
          >
            넷제로 달성을 위한 AI 기반 탄소 예측 및 상쇄 자동매칭 플랫폼
          </Typography>
          
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" mb={4}>
            <Chip 
              label="②에너지 전환" 
              color="secondary" 
              icon={<WorkspacePremium />}
              sx={{ fontSize: '1rem', py: 2.5, px: 1 }} 
            />
            <Chip 
              label="AI 기반 탄소예측" 
              color="info" 
              icon={<Insights />}
              sx={{ fontSize: '1rem', py: 2.5, px: 1 }}
            />
            <Chip 
              label="자동매칭 플랫폼" 
              color="success" 
              icon={<AutoAwesome />}
              sx={{ fontSize: '1rem', py: 2.5, px: 1 }}
            />
          </Stack>
          
        </Box>

        {/* 개요 섹션 */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 6, 
            mb: 6, 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 3
          }}
        >
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              fontWeight: 700,
              color: 'primary.main',
              mb: 3
            }}
          >
            <CheckCircleOutline sx={{ mr: 2, fontSize: '2rem' }} />
            프로젝트 개요
          </Typography>
          <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, color: 'text.primary', mb: 2 }}>
            중부발전 전 발전소의 실시간 탄소배출량을 AI로 예측하고, RE100 기업과 자동 매칭하여 
            탄소상쇄 거래를 중개하는 혁신적인 플랫폼입니다.
          </Typography>
          <Typography variant="h6" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
            발전소별 연료 혼소비율, 기상조건, 전력수요를 종합 분석하여 시간대별 탄소집약도를 예측하고 
            청정전력 공급시간 안내 서비스를 제공합니다.
          </Typography>
        </Paper>

        {/* 주요 기능 */}
        <Box mb={8}>
          <Typography 
            variant="h3" 
            gutterBottom 
            textAlign="center"
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
              mb: 2
            }}
          >
            주요 기능
          </Typography>
          <Typography 
            variant="h6" 
            textAlign="center" 
            color="text.secondary" 
            sx={{ mb: 5 }}
          >
            KOMIPO 공모전 요구사항 완벽 구현
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 200, 81, 0.15)',
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                    },
                    transition: 'all 0.4s ease'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box display="flex" alignItems="center" mb={3}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 3,
                          background: 'linear-gradient(135deg, #00C851 0%, #00BCD4 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 3,
                          boxShadow: '0 8px 32px rgba(0, 200, 81, 0.3)',
                        }}
                      >
                        {React.cloneElement(feature.icon, { 
                          sx: { color: 'white', fontSize: '1.8rem' } 
                        })}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 데모 시나리오 */}
        <Box mb={8}>
          <Typography 
            variant="h3" 
            gutterBottom 
            textAlign="center"
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
              mb: 2
            }}
          >
            데모 시나리오
          </Typography>
          <Typography 
            variant="h6" 
            textAlign="center" 
            color="text.secondary" 
            sx={{ mb: 5 }}
          >
            KOMIPO 제안서 기반 실제 사용 시나리오
          </Typography>
          <Grid container spacing={4}>
            {scenarios.map((scenario, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    background: `linear-gradient(135deg, ${
                      index === 0 ? 'rgba(255, 152, 0, 0.05)' :
                      index === 1 ? 'rgba(33, 150, 243, 0.05)' :
                      'rgba(76, 175, 80, 0.05)'
                    } 0%, rgba(255,255,255,0.8) 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${
                      index === 0 ? alpha(theme.palette.warning.main, 0.2) :
                      index === 1 ? alpha(theme.palette.info.main, 0.2) :
                      alpha(theme.palette.success.main, 0.2)
                    }`,
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${
                        index === 0 ? 'rgba(255, 152, 0, 0.15)' :
                        index === 1 ? 'rgba(33, 150, 243, 0.15)' :
                        'rgba(76, 175, 80, 0.15)'
                      }`,
                    },
                    transition: 'all 0.4s ease'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box display="flex" alignItems="center" mb={4}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 2,
                          background: index === 0 ? 
                            'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)' :
                            index === 1 ?
                            'linear-gradient(135deg, #2196F3 0%, #1565C0 100%)' :
                            'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        {React.cloneElement(scenario.icon, { 
                          sx: { color: 'white', fontSize: '1.5rem' } 
                        })}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {scenario.title}
                      </Typography>
                    </Box>
                    <List dense>
                      {scenario.items.map((item, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleOutline 
                              sx={{ 
                                color: index === 0 ? 'warning.main' :
                                        index === 1 ? 'info.main' : 'success.main',
                                fontSize: '1.2rem'
                              }} 
                            />
                          </ListItemIcon>
                          <ListItemText 
                            primary={item} 
                            primaryTypographyProps={{ 
                              fontSize: '1rem',
                              fontWeight: 500,
                              color: 'text.primary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 기대효과 */}
        <Box mb={8}>
          <Typography 
            variant="h3" 
            gutterBottom 
            textAlign="center"
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <EmojiEvents sx={{ mr: 2, fontSize: '2.5rem', color: 'warning.main' }} />
            KOMIPO 공모전 기대효과
          </Typography>
          <Typography 
            variant="h6" 
            textAlign="center" 
            color="text.secondary" 
            sx={{ mb: 5 }}
          >
            제안서 기반 정량적·정성적 성과 지표
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card 
                elevation={0}
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255,255,255,0.8) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${alpha(theme.palette.success.main, 0.2)}`,
                  borderRadius: 3,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(76, 175, 80, 0.15)',
                  },
                  transition: 'all 0.4s ease'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      fontWeight: 700,
                      color: 'success.main',
                      mb: 3
                    }}
                  >
                    <AttachMoney sx={{ mr: 2, fontSize: '2rem' }} />
                    계량적 효과
                  </Typography>
                  <Divider sx={{ mb: 3, backgroundColor: alpha(theme.palette.success.main, 0.2) }} />
                  <List>
                    {quantitativeEffects.map((effect, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <Timeline sx={{ color: 'success.main', fontSize: '1.5rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={effect} 
                          primaryTypographyProps={{ 
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            color: 'text.primary'
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card 
                elevation={0}
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(255,255,255,0.8) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${alpha(theme.palette.warning.main, 0.2)}`,
                  borderRadius: 3,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(255, 193, 7, 0.15)',
                  },
                  transition: 'all 0.4s ease'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      fontWeight: 700,
                      color: 'warning.main',
                      mb: 3
                    }}
                  >
                    <EmojiEvents sx={{ mr: 2, fontSize: '2rem' }} />
                    비계량적 효과
                  </Typography>
                  <Divider sx={{ mb: 3, backgroundColor: alpha(theme.palette.warning.main, 0.2) }} />
                  <List>
                    {qualitativeEffects.map((effect, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleOutline sx={{ color: 'warning.main', fontSize: '1.5rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={effect} 
                          primaryTypographyProps={{ 
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            color: 'text.primary'
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* 마무리 섹션 */}
        <Paper
          elevation={0}
          sx={{
            p: 6,
            background: 'linear-gradient(135deg, rgba(0, 200, 81, 0.1) 0%, rgba(0, 188, 212, 0.1) 100%)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(0, 200, 81, 0.2)',
            borderRadius: 3,
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 3
            }}
          >
            🎯 완전한 기능 데모 프로토타입
          </Typography>
          <Typography 
            variant="h6" 
            paragraph
            sx={{ 
              lineHeight: 1.8, 
              color: 'text.primary',
              mb: 3 
            }}
          >
            이 프로토타입은 실제 API/DB 없이 완전한 기능을 시연할 수 있도록 Mock 데이터를 활용하여 구현되었습니다.
          </Typography>
          <Typography 
            variant="h6"
            sx={{ 
              lineHeight: 1.8, 
              color: 'text.secondary'
            }}
          >
            모든 주요 기능이 실제처럼 동작하며, KOMIPO 공모전 심사위원들이 직접 체험할 수 있는 완전한 데모를 제공합니다.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default IntroductionPage;